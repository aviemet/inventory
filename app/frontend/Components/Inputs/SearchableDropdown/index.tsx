import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { MdExpandMore } from 'react-icons/md'
import useEventListener from './useEventListener'
import cx from 'classnames'
import { InputProps } from 'react-html-props'

interface ISearchableDropdownProps extends InputProps {
	options: Array<Record<string, any>>
	defaultValue: string
	getLabel: (option: Record<string, any>) => any
	getValue: (option: Record<string, any>) => string
	onChange?: (option: Record<string, any>) => void
}

const SearchableDropdown = ({ options, defaultValue, getLabel, getValue, onChange, ...props }: ISearchableDropdownProps) => {
	const getOption = (val: string) => options.find(option => String(getValue(option)) === val)

	const defaultOption = getOption(defaultValue)
	const defaultLabel = defaultOption ? getLabel(defaultOption) : ''

	const [value, setValue] = useState(defaultValue || '')
	const [label, setLabel] = useState(defaultLabel)
	const [open, setOpen] = useState(false)
	const [shouldFilter, setShouldFilter] = useState(false)
	const [saveLabel, setSaveLabel] = useState('')

	const outerElRef = useRef<HTMLDivElement>(null)
	const labelInputRef = useRef<HTMLInputElement>(null)
	const optionsParentRef = useRef<HTMLDivElement>(null)

	const handleOpen = () => {
		setOpen(true)
		labelInputRef.current!.select()
		setSaveLabel(label)
	}

	const handleClose = () => {
		setOpen(false)
		setShouldFilter(false)
		labelInputRef.current!.blur()
	}

	const revertLabelAndClose = () => {
		if(!open) return

		handleClose()
		setLabel(saveLabel)
	}

	const handleLabelChange = e => {
		if(!shouldFilter) setShouldFilter(true)
		setLabel(e.target.value)
	}

	const handleChoice = (option: Record<string, any>) => {
		setValue(getValue(option))
		setLabel(getLabel(option))

		handleClose()

		if(onChange) onChange(option)
	}

	const handleClickAway = e => {
		if(!outerElRef.current?.contains(e.target)) {
			revertLabelAndClose()
		}
	}

	const handleKeyPress = e => {
		switch(e.key) {
			case 'Escape' || 'Tab':
				revertLabelAndClose()
				break
			case 'ArrowDown':
				handleArrowKeys('down')
				break
			case 'ArrowUp':
				handleArrowKeys('up')
				break
			case 'Enter':
				e.preventDefault()
				const active = optionsParentRef.current!.querySelector('.active')
				if(!active) return

				const v = active.dataset.value
				if(!v) {
					handleClose()
					break
				}

				const option = getOption(v)
				if(!option) {
					handleClose()
					break
				}

				handleChoice(option)
		}
	}

	const handleArrowKeys = (dir: 'up'|'down') => {
		const active = optionsParentRef.current!.querySelector('.active')
		if(!active) return

		const el = dir === 'down' ?
			active.nextElementSibling :
			active.previousElementSibling

		if(el) {
			const v = el.dataset.value
			const option = getOption(v)
			const label = getLabel(option)
			setLabel(label)
			active.classList.remove('active')
			el.classList.add('active')
			console.log({ el, v })
		}

		setTimeout(() => labelInputRef.current!.select(), 1)
	}

	useEffect(() => {
		if(open){
			document.addEventListener('click', handleClickAway)
			outerElRef.current?.addEventListener('keydown', handleKeyPress)
		}

		return () => {
			document.removeEventListener('click', handleClickAway)
			outerElRef.current?.removeEventListener('keydown', handleKeyPress)
		}
	}, [outerElRef, open])

	useLayoutEffect(() => {
		if(!optionsParentRef.current) return

		const options = optionsParentRef.current.children
		if(Array.isArray(options) && options.length > 0) {
			if(!optionsParentRef.current.querySelector('.active')) {
				optionsParentRef.current.children[0].classList.add('active')
			}
		}
	}, [label])

	const optionsFilter = option => {
		const optionLabel = String(getLabel(option)).toLowerCase()
		const optionValue = String(getValue(option)).toLowerCase()

		const testLabel = label.trim()

		return optionLabel.includes(testLabel) || optionValue.includes(testLabel)
	}

	const filterOptions = options => {
		return shouldFilter ? options.filter(optionsFilter) : options
	}

	return (
		<div
			className={ cx('dropdown-search', { open }) }
			onClick={ () => { if(!open) handleOpen() } }
			ref={ outerElRef }
		>
			<input type="hidden" value={ value } { ...props } />
			<div className="selector">
				<input
					type="text"
					value={ label }
					onChange={ handleLabelChange }
					onFocus={ () => { if(!open) handleOpen() } }
					ref={ labelInputRef }
					id="OK"
				/>
				<div className="expand-icon" onClick={ () => { if(open) handleClose() } }>
					<MdExpandMore className="cursor-pointer" />
				</div>
			</div>

			<div className='options' ref={ optionsParentRef }>
				{ filterOptions(options).map((option, i) => {
					let active = getValue(option) === value

					return (
						<div
							key={ getValue(option) }
							data-value={ getValue(option) }
							className={ cx('option', { 'active': active } ) }
							onClick={ () => handleChoice(option) }
						>
							{ getLabel(option) }
						</div>
					)
				}) }
			</div>
		</div>
	)
}

export default SearchableDropdown
