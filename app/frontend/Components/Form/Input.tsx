import React, { forwardRef, useCallback } from 'react'
import { TextInput, NumberInput, PasswordInput, CurrencyInput } from '../Inputs'
import { useForm, useInputProps } from './index'
import Field from './Field'
import { type InputProps } from '@mantine/core'
import cx from 'clsx'

interface IInputProps extends Omit<InputProps, 'onChange'> {
	type?: 'text'|'password'|'number'|'currency'
	label?: string
	name: string
	model?: string
	onChange?: (value: string|number, form: Inertia.FormProps) => void
	id?: string
	compact?: boolean
	autoFocus?: boolean
	min?: number
	max?: number
}

const FormInput = forwardRef<HTMLInputElement, IInputProps>((
	{ label, name, model, onChange, type = 'text', id, required, compact = false, ...props },
	ref,
) => {
	const form = useForm()
	const { inputId, inputName } = useInputProps(name, model)

	const handleChange = useCallback((e?: number | React.ChangeEvent<HTMLInputElement>) => {
		if(e === undefined) return

		const value = typeof e === 'number' ? e : e.target.value

		form.setData(inputName, value)

		if(onChange) onChange(value, form)
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
			className={ cx({ compact }) }
			errors={ !!form.errors?.[inputName] }
		>
			<InputComponent
				id={ id || inputId }
				name={ inputName }
				label={ label }
				value={ form.getData(inputName) }
				onChange={ handleChange }
				ref={ ref }
				error={ form.errors[name] }
				className={ cx({ compact }) }
				{ ...props }
			/>
		</Field>
	)
})

export default FormInput
