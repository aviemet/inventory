import React, { useCallback } from 'react'
import { useForm, useInputProps } from './index'
import Field from './Field'
import SearchableDropdownInput, { type ISearchableDropdownProps } from '../Inputs/SearchableDropdown'

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
			<SearchableDropdownInput
				id={ id || inputId }
				name={ inputName }
				options={ options }
				value={ form.getData(inputName) }
				onChange={ handleChange }
				defaultValue={ defaultValue ?? form.getData(inputName) }
				getLabel={ getLabel }
				getValue={ getValue }
				label={ label }
				{ ...props }
			/>
		</Field>
	)
}

export default SearchableDropdown
