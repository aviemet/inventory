import React, { useState, useRef } from 'react'
import { useClickAwayListener } from '@/Components/Hooks'
import { MdExpandMore } from 'react-icons/md'
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
	const defaultOption = options.find(option => String(getValue(option)) === defaultValue)
	const defaultLabel = defaultOption ? getLabel(defaultOption) : ''

	const [value, setValue] = useState(defaultValue || '')
	const [label, setLabel] = useState(defaultLabel)
	const [open, setOpen] = useState(false)
	const [shouldFilter, setShouldFilter] = useState(false)

	const outerElRef = useRef<HTMLDivElement>(null)
	const labelInputRef = useRef<HTMLInputElement>(null)

	const { startClickListener, cancelClickListener } = useClickAwayListener(outerElRef, () => {
		setOpen(false)
		const prevOption = options.find(option => getValue(option) === value)
		setLabel(prevOption ? getLabel(prevOption) : '')
	})

	const handleOpen = () => startClickListener(() => {
		setOpen(true)
		labelInputRef.current!.select()
	})
	const handleClose = () => cancelClickListener(() => {
		setOpen(false)
		setShouldFilter(false)
		labelInputRef.current!.blur()
	})

	const handleClick = () => {
		if(!open) handleOpen()
	}

	const handleChoice = (option: Record<string, any>) => {
		setValue(getValue(option))
		setLabel(getLabel(option))

		handleClose()

		if(onChange) onChange(option)
	}

	const handleLabelChange = e => {
		if(!shouldFilter) setShouldFilter(true)
		setLabel(e.target.value)
	}

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
			onClick={ handleClick }
			ref={ outerElRef }
		>
			<input type="hidden" value={ value } { ...props } />
			<div className="selector">
				<input
					type="text"
					value={ label }
					onChange={ handleLabelChange }
					ref={ labelInputRef }
					id="OK"
				/>
				<div className="expand-icon" onClick={ handleClose }>
					<MdExpandMore className="cursor-pointer" />
				</div>
			</div>
			<div className='options'>
				{ filterOptions(options).map(option => (
					<div
						key={ getValue(option) }
						className={ cx('option', { active: value === String(getValue(option)) } ) }
						onClick={ () => handleChoice(option) }
					>
						{ getLabel(option) }
					</div>
				)) }
			</div>
		</div>
	)
}

export default SearchableDropdown
