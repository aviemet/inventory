import React, { useCallback } from 'react'
import { useForm, useInputProps } from './Form'
import Field from './Field'
import Feedback from './Feedback'
import SearchableDropdownInput, { type ISearchableDropdownProps } from '../Inputs/SearchableDropdown'
import cx from 'classnames'

interface IInputProps extends Omit<ISearchableDropdownProps, 'defaultValue'|'onChange'> {
	label?: string
	name: string
	defaultValue?: string
	onChange?: (option: string|null, form: Inertia.FormProps) => void
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
	const form = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange = useCallback((option: string|null) => {
		form.setData(inputName, option)
		if(onChange) onChange(option, form)
	}, [onChange, inputName])

	return (
		<Field type="select" required={ required } errors={ !!form.errors?.[name] }>
			{ label && <label className={ cx({ required }) } htmlFor={ id || inputId }>
				{ label }
			</label> }
			<SearchableDropdownInput
				id={ id || inputId }
				name={ inputName }
				options={ options }
				value={ form.getData(inputName) }
				onChange={ handleChange }
				defaultValue={ defaultValue ?? form.getData(inputName) }
				getLabel={ getLabel }
				getValue={ getValue }
				{ ...props }
			/>
			<Feedback errors={ form.errors[name] } />
		</Field>
	)
}

export default SearchableDropdown
