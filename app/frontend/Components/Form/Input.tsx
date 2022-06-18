import React, { forwardRef, useCallback } from 'react'
import { TextInput, NumberInput, PasswordInput, CurrencyInput } from '../Inputs'
import { InputProps } from 'react-html-props'
import { useForm, useInputProps } from './Form'
import Field from './Field'
import Feedback from './Feedback'

interface IInputProps extends Omit<InputProps, 'onChange'|'ref'> {
	type?: 'text'|'password'|'number'|'currency'
	label?: string
	name: string
	model?: string
	onChange?: (value: string, form: Inertia.FormProps) => void
}

const FormInput = forwardRef<HTMLInputElement, IInputProps>((
	{ label, name, model, onChange, type = 'text', id, required, ...props },
	ref,
) => {
	const form = useForm()
	const { inputId, inputName } = useInputProps(name, model)

	const handleChange = useCallback((e:  React.ChangeEvent<HTMLInputElement>) => {
		form.setData(inputName, e.target.value)
		if(onChange) onChange(e.target.value, form)
	}, [onChange, inputName])

	let InputComponent
	switch(type) {
		case 'password':
			InputComponent = PasswordInput
			break
		case 'number':
			InputComponent = NumberInput
			break
		case 'currency':
			InputComponent = CurrencyInput
			break
		case 'text':
		default:
			InputComponent = TextInput
	}

	return (
		<Field
			type={ type }
			required={ required }
			errors={ !!form.errors?.[inputName] }
		>
			<InputComponent
				id={ id || inputId }
				name={ inputName }
				label={ label }
				value={ form.getData(inputName) }
				onChange={ handleChange }
				ref={ ref }
				{ ...props }
			/>
			<Feedback errors={ form.errors[inputName] } />
		</Field>
	)
})

export default FormInput
