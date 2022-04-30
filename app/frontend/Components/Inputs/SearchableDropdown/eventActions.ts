import React from 'react'

type TMethods = {
	handleOpen: Function
	handleClose: Function
	revertLabelAndClose: Function
	handleChoice: Function
	getOption: Function
}

type TRefs = {
	optionsParentRef: React.RefObject<HTMLDivElement>
	labelInputRef: React.RefObject<HTMLInputElement>
	outerElRef: React.RefObject<HTMLDivElement>
}

export const handleUserActions = (
	e: MouseEvent | KeyboardEvent,
	methods: TMethods,
	refs: TRefs
) => {
	switch(e.type) {
		case 'click':
			// @ts-ignore - e.target will always be compatibale with ref.current.contains
			if(!refs.outerElRef.current!.contains(e.target)) {
				methods.handleClose()
			}
			break
		case 'keydown':
			// @ts-ignore - e will always a KeyboardEvent type
			dispatchKeys(e, methods, refs)
			break
	}
}

export const dispatchKeys = (e: KeyboardEvent, methods: TMethods, refs: TRefs) => {
	switch(e.key) {
		case 'Escape':
		case 'Tab':
			methods.revertLabelAndClose()
			break
		case 'ArrowDown':
			handleArrowKeys('down', methods, refs)
			break
		case 'ArrowUp':
			handleArrowKeys('up', methods, refs)
			break
		case 'Enter':
			if(e.key === 'Enter') e.preventDefault()
			handleEnterKey(e, methods, refs)
			break
		default:
			methods.handleOpen()
	}
}

const handleArrowKeys = (dir: 'up'|'down', methods: TMethods, refs: TRefs) => {
	const active = refs.optionsParentRef.current!.querySelector('.active')
	if(!active) return

	const el = dir === 'down' ?
		active.nextElementSibling :
		active.previousElementSibling

	if(el) {
		active.classList.remove('active')
		el.classList.add('active')
	}

	setTimeout(() => refs.labelInputRef.current!.select(), 1)
}

const handleEnterKey = (e: KeyboardEvent, methods: TMethods, refs: TRefs) => {
	const active = refs.optionsParentRef.current!.querySelector('.active')
	if(!active) return

	const v = active.dataset.value
	if(!v) {
		methods.handleClose()
		return
	}

	const option = methods.getOption(v)
	if(!option) {
		methods.handleClose()
		return
	}

	methods.handleChoice(option)
	if(e?.target?.tagName === 'INPUT') {
		e.target.focus()
	}
}

