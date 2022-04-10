import React, { useState, useRef } from 'react'
import { useClickAwayListener } from '@/Components/Hooks'
import { MdExpandMore } from 'react-icons/md'
import classnames from 'classnames'

interface ISearchableDropdownProps {
	options: Array<Record<string, any>>
	defaultValue: string
	getLabel: (option: Record<string, any>) => any
	getValue: (option: Record<string, any>) => string
	onChange?: (option: Record<string, any>) => void
}

const SearchableDropdown = ({ options, defaultValue, getLabel, getValue, onChange }: ISearchableDropdownProps) => {
	const defaultOption = options.find(option => String(getValue(option)) === defaultValue)
	const defaultLabel = defaultOption ? getLabel(defaultOption) : ''

	const [value, setValue] = useState(defaultValue || '')
	const [label, setLabel] = useState(defaultLabel)
	const [open, setOpen] = useState(false)

	const outerElRef = useRef<HTMLDivElement>(null)

	const { startClickListener, cancelClickListener } = useClickAwayListener(outerElRef, () => {
		setOpen(false)
	})

	const handleClose = () => cancelClickListener(() => setOpen(false))
	const handleOpen = () => startClickListener(() => setOpen(true))

	const handleClick = () => {
		if(!open) handleOpen()
	}

	const handleChoice = (option: Record<string, any>) => {
		handleClose()

		if(onChange) onChange(option)
		setValue(getValue(option))
	}

	const handleLabelChange = e => {
		setLabel(e.target.value)
	}

	const optionsFilter = option => {
		const optionLabel = String(getLabel(option))
		const optionValue = String(getValue(option))

		const testLabel = label.trim()

		return optionLabel.includes(testLabel) || optionValue.includes(testLabel)
	}

	return (
		<div
			className={ classnames('dropdown-search', { open }) }
			onClick={ handleClick }
			ref={ outerElRef }
		>
			<input type="hidden" value={ value }/>
			<div className="selector">
				<input
					type="text"
					value={ label }
					onChange={ handleLabelChange }
				/>
				<div className="icon" onClick={ handleClose }>
					<MdExpandMore className="cursor-pointer" />
				</div>
			</div>
			<div className='options'>
				{ options.filter(optionsFilter).map(option => (
					<div
						key={ getValue(option) }
						className={ classnames('option', { active: value === String(getValue(option)) } ) }
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
