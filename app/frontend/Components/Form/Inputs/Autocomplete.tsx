import React from 'react'
import Field from '../Field'
import AutocompleteInput, { type IAutocompleteProps } from '@/Components/Inputs/AutocompleteInput'
import cx from 'clsx'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import { type IFormInputProps } from '.'

interface IFormAutocompleteProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<IAutocompleteProps, 'name'|'onBlur'|'onChange'>,
	IFormInputProps<string, TForm> {
	field?: boolean
	endpoint?: string
}

const FormAutocompleteComponent = <TForm extends NestedObject = NestedObject>(
	{
		name,
		model,
		onChange,
		onBlur,
		id,
		required,
		errorKey,
		field = true,
		endpoint,
		...props
	} : IFormAutocompleteProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string, TForm>({ name, model })

	const handleChange = (parameter: string) => {
		setValue(parameter)
		onChange?.(parameter, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		if(onBlur) onBlur(value, form)
	}

	return (
		<AutocompleteInput
			id={ id || inputId }
			name={ inputName }
			value={ value }
			onChange={ handleChange }
			onBlur={ handleBlur }
			error={ errorKey ? form.getError(errorKey) : error }
			wrapperProps={ {
				component: Field,
				className: cx({ required }),
				errors: Boolean(error),
				style: { padding: 0 },
			} }
			wrapper={ false }
			{ ...props }
		/>

	)
}

export default FormAutocompleteComponent
