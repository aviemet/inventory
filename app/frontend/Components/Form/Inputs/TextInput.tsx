import React, { forwardRef } from 'react'
import { TextInput } from '@/Components/Inputs'
import Field from '../Field'
import cx from 'clsx'
import { useInertiaInput } from 'use-inertia-form'

interface ITextInputProps extends IInputProps<string> {
	errorKey?: string
}

const FormInput = forwardRef<HTMLInputElement, ITextInputProps>((
	{ label, name, model, onChange, onBlur, id, required, compact = false, errorKey, ...props },
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setValue(value)

		if(onChange) onChange(value, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		const value = e.target.value
		setValue(value)

		if(onBlur) onBlur(value, form)
	}

	return (
		<Field
			type="text"
			required={ required }
			className={ cx({ compact }) }
			errors={ !!error }
		>
			<TextInput
				id={ id || inputId }
				className={ cx({ compact }) }
				name={ inputName }
				label={ label }
				value={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				error={ errorKey ? form.getError(errorKey) : error }
				ref={ ref }
				{ ...props }
			/>
		</Field>
	)
})

export default FormInput
