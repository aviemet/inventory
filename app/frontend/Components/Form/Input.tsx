import React, { forwardRef } from 'react'
import { TextInput, NumberInput, PasswordInput, CurrencyInput } from '../Inputs'
import Field from './Field'
import cx from 'clsx'
import { type InputProps } from '@mantine/core'
import { type TInputType } from './Form'
import useInertiaInput from './useInertiaInput'

interface IInputProps extends Omit<InputProps, 'onChange'> {
	type?: TInputType
	label?: string
	placeholder?: string
	name: string
	model?: string
	onChange?: (value: string|number, form: Inertia.FormProps) => void
	onBlur?: (value: string|number, form: Inertia.FormProps) => void
	pattern?: string
	id?: string
	compact?: boolean
	autoFocus?: boolean
	autoComplete?: string
	min?: number
	max?: number
}

const FormInput = forwardRef<HTMLInputElement, IInputProps>((
	{ label, name, model, onChange, onBlur, type = 'text', id, required, compact = false, ...props },
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput(name, model)

	const handleChange = (e?: number | React.ChangeEvent<HTMLInputElement>) => {
		if(e === undefined) return

		const v = typeof e === 'number' ? e : e.target.value
		setValue(v)

		if(onChange) onChange(v, form)
	}

	const handleBlur = (e?: number | React.FocusEvent<HTMLInputElement, Element>) => {
		if(e === undefined) return

		const v = typeof e === 'number' ? e : e.target.value

		if(onBlur) onBlur(v, form)
	}

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
			errors={ !!error }
		>
			<InputComponent
				id={ id || inputId }
				name={ inputName }
				label={ label }
				value={ value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				ref={ ref }
				error={ error }
				className={ cx({ compact }) }
				{ ...props }
			/>
		</Field>
	)
})

export default FormInput
