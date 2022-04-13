import React from 'react'
import { InputProps } from 'react-html-props'
import { useForm, useInputProps } from './Form'
import { SearchableDropdown as SearchableDropdownInput } from '../Inputs'
import classnames from 'classnames'

interface IInputProps extends InputProps {
	options: Array<Record<string, any>>
	label?: string
	name: string
	getLabel: (option: Record<string, any>) => any
	getValue: (option: Record<string, any>) => string
	onChange?: (option: Record<string, any>) => void
}

const SearchableDropdown = ({ options, label, name, required, getLabel, getValue, onChange, id, ...props }: IInputProps) => {
	const { data, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange = option => {
		if(onChange) onChange(option)
		setData(name, getValue(option))
	}

	return (
		<div className={ classnames('field', 'select', { required }) }>
			{ label && <label className={ classnames({ required }) } htmlFor={ id || inputId }>
				{ label }
			</label> }
			<SearchableDropdownInput
				name={ inputName }
				options={ options }
				defaultValue={ data[name] }
				getLabel={ getLabel }
				getValue={ getValue }
				onChange={ handleChange }
				{ ...props }
			/>
			{ errors && <div className="feedback">
			</div> }
		</div>
	)
}

export default SearchableDropdown
