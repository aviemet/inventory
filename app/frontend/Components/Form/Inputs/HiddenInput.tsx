import React from 'react'
import { HiddenInput } from '@/Components/Inputs'
import { NestedObject, useInertiaInput } from 'use-inertia-form'
import { InputProps } from 'react-html-props'
import { type IFormInputProps } from '.'

interface IHiddenInputProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<InputProps, 'name'|'ref'|'onBlur'|'onChange'>,
	Omit<IFormInputProps<string, TForm>, 'span'> {}

const FormInput = <TForm extends NestedObject = NestedObject>(
	{ name, model, onChange, onBlur, id, ...props }: IHiddenInputProps<TForm>,
) => {
	const { form, inputName, inputId, value, setValue } = useInertiaInput<string, TForm>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setValue(value)

		onChange?.(value, form)
	}

	return (
		<HiddenInput
			id={ id || inputId }
			name={ inputName }
			value={ value }
			onChange={ handleChange }
			{ ...props }
		/>
	)
}

export default FormInput
