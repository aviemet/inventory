import React, { forwardRef } from 'react'
import { HiddenInput } from '@/Components/Inputs'
import { useInertiaInput } from 'use-inertia-form'
import { InputProps } from 'react-html-props'
import { type IFormInputProps } from '.'

interface ITextInputProps extends
	Omit<InputProps, 'name'|'ref'|'onBlur'|'onChange'>,
	Omit<IFormInputProps<string>, 'span'> {}

const FormInput = forwardRef<HTMLInputElement, ITextInputProps>((
	{ name, model, onChange, onBlur, id, ...props },
	ref,
) => {
	const { form, inputName, inputId, value, setValue } = useInertiaInput<string>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setValue(value)

		onChange?.(value, form)
	}

	return (
		<HiddenInput
			ref={ ref }
			id={ id || inputId }
			name={ inputName }
			value={ value }
			onChange={ handleChange }
			{ ...props }
		/>
	)
})

export default FormInput
