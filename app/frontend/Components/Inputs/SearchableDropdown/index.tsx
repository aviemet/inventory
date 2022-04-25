import React, { useState, useRef, useEffect } from 'react'
import { Inertia } from '@inertiajs/inertia'
import Input from './Input'
import Options from './Options'
import { handleUserActions } from './eventActions'
import cx from 'classnames'
import { InputProps } from 'react-html-props'
import tw, { styled } from 'twin.macro'

export interface ISearchableDropdownProps extends InputProps {
	options: Array<Record<string, any>>
	defaultValue: string
	getLabel: (option: Record<string, any>) => any
	getValue: (option: Record<string, any>) => string
	onChange?: (option: Record<string, any>) => void
	filterMatchKeys?: string[]
}

const SearchableDropdown = ({ options, src, defaultValue, getLabel, getValue, onChange, filterMatchKeys, ...props }: ISearchableDropdownProps) => {
	const getOption = (val: string) => options.find(option => String(getValue(option)) === val)

	const defaultOption = getOption(defaultValue)
	const defaultLabel = defaultOption ? getLabel(defaultOption) : ''

	const [value, setValue] = useState(defaultValue || '')
	const [label, setLabel] = useState(defaultLabel)
	const [open, setOpen] = useState(false)
	const [shouldFilter, setShouldFilter] = useState(false)
	const [revertLabel, setrevertLabel] = useState('')

	const outerElRef = useRef<HTMLDivElement>(null)
	const labelInputRef = useRef<HTMLInputElement>(null)
	const optionsParentRef = useRef<HTMLDivElement>(null)

	const handleOpen = () => {
		if(open) return

		setOpen(true)
		labelInputRef.current!.select()
		setrevertLabel(label)
	}

	const handleClose = () => {
		if(!open) return

		setOpen(false)
		setShouldFilter(false)
		labelInputRef.current!.blur()
	}

	const revertLabelAndClose = () => {
		if(!open) return

		handleClose()
		setLabel(revertLabel)
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

	const dispatchUserAction = e => handleUserActions(e, { handleOpen, handleClose, revertLabelAndClose, handleChoice, getOption }, { optionsParentRef, labelInputRef, outerElRef })

	useEffect(() => {
		if(open){
			document.addEventListener('click', dispatchUserAction)
			outerElRef.current?.addEventListener('keydown', dispatchUserAction)
		}

		return () => {
			document.removeEventListener('click', dispatchUserAction)
			outerElRef.current?.removeEventListener('keydown', dispatchUserAction)
		}
	}, [outerElRef, open, label, value])

	return (
		<SearchComponent
			className={ cx('dropdown-search', { open }) }
			onClick={ () => { if(!open) handleOpen() } }
			ref={ outerElRef }
		>
			<Input
				value={ value }
				label={ label }
				open={ open }
				handleOpen={ handleOpen }
				handleClose={ handleClose }
				onChange={ handleLabelChange }
				{ ...props }
				ref={ labelInputRef }
			/>
			<Options
				options={ options }
				filterTerms={ label.toLowerCase().trim() }
				filterMatchKeys={ filterMatchKeys }
				shouldFilter={ shouldFilter }
				activeOption={ value }
				getValue={ getValue }
				getLabel={ getLabel }
				handleChoice={ handleChoice }
				ref={ optionsParentRef }
			/>
		</SearchComponent>
	)
}

export default SearchableDropdown

const SearchComponent = styled.div`
	${tw`relative inline-block`}

  &.open {
    .selector {
      ${tw`cursor-default`}

      .expand-icon > svg {
        transform: rotate(180deg);
      }

      input {
        ${tw`cursor-text`}
      }
    }

    .options {
      ${tw`z-10 block`}
    }
  }
`
