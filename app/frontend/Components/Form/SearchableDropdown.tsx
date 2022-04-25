import React from 'react'
import { InputProps } from 'react-html-props'
import { useForm, useInputProps } from './Form'
import Field from './Field'
import Feedback from './Feedback'
import SearchableDropdownInput, { type ISearchableDropdownProps } from '../Inputs/SearchableDropdown'
import cx from 'classnames'

interface IInputProps extends Omit<ISearchableDropdownProps, 'defaultValue'> {
	label?: string
	name: string
	defaultValue?: string
}

const SearchableDropdown = ({ options, label, name, required, defaultValue, getLabel, getValue, onChange, id, ...props }: IInputProps) => {
	const { data, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange = option => {
		if(onChange) onChange(option)
		setData(name, getValue(option))
	}

	return (
		<Field type="select" required={ required } errors={ !!errors?.[name] }>
			{ label && <label className={ cx({ required }) } htmlFor={ id || inputId }>
				{ label }
			</label> }
			<SearchableDropdownInput
				name={ inputName }
				options={ options }
				defaultValue={ defaultValue ?? data[name] }
				getLabel={ getLabel }
				getValue={ getValue }
				onChange={ handleChange }
				{ ...props }
			/>
			<Feedback errors={ errors[name] } />
		</Field>
	)
}

export default SearchableDropdown
