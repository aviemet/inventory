import React from 'react'
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

const SearchableDropdown = ({
	options,
	label,
	name,
	required,
	defaultValue,
	getLabel = option => option.name,
	getValue = option => String(option.id),
	onChange,
	id,
	...props
}: IInputProps) => {
	const { getData, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange = option => {
		setData(inputName, getValue(option))
		if(onChange) onChange(option)
	}

	return (
		<Field type="select" required={ required } errors={ !!errors?.[name] }>
			{ label && <label className={ cx({ required }) } htmlFor={ id || inputId }>
				{ label }
			</label> }
			<SearchableDropdownInput
				id={ id || inputId }
				name={ inputName }
				options={ options }
				defaultValue={ defaultValue ?? getData[inputName] }
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
