import React, { forwardRef } from 'react'
import PasswordInput, { type IPasswordInputProps } from '@/Components/Inputs/PasswordInput'
import Field from '../Field'
import { useInertiaInput } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'
import { type IFormInputProps } from '.'

interface IPasswordFormInputProps extends Omit<IPasswordInputProps, 'onBlur'|'onChange'|'name'>, IFormInputProps<string> {}

const FormInput = forwardRef<HTMLInputElement, IPasswordFormInputProps>((
	{
		name,
		model,
		onChange,
		onBlur,
		id,
		required,
		field = true,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setValue(value)

		onChange?.(value, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		const value = e.target.value
		setValue(value)

		if(onBlur) onBlur(value, form)
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Field
					type="password"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
			condition={ field }
		>
			<PasswordInput
				ref={ ref }
				id={ id || inputId }
				name={ inputName }
				value={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				error={ error }
				wrapper={ false }
				{ ...props }
			/></ConditionalWrapper>
	)
})

export default FormInput
