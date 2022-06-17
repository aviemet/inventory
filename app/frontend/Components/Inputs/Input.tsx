import React, { forwardRef } from 'react'
import { Input, TextInput, NumberInput, PasswordInput, type TextInputProps, type NumberInputProps, type PasswordInputProps } from '@mantine/core'
import { InputProps } from 'react-html-props'
import cn from 'classnames'

interface IInputProps {
	type?: 'text'|'number'|'password'
	label?: string
	name?: string
	value: string|number
}

const InputComponent = forwardRef<HTMLInputElement, IInputProps>((
	{ label, required = false, value, onChange, type = 'text', id, pattern, ...props },
	ref,
) => {
	let InputComponent: typeof PasswordInputComponent | typeof NumberInputComponent | typeof TextInputComponent

	switch(type) {
		case 'password':
			InputComponent = PasswordInputComponent
			break
		case 'number':
			InputComponent = NumberInputComponent
			break
		case 'text':
		default:
			InputComponent = TextInputComponent
			break
	}

	return (
		<>
			{ label && <label className={ cn({ 'required': required }) } htmlFor={ id }>
				{ label }
			</label> }
			<Input
				id={ id }
				value={ type === 'number' && typeof value === 'string' ? parseInt(value) : value }
				onChange={ onChange }
				type={ type }
				required={ required }
				ref={ ref }
				pattern={ pattern }
				size="md"
				{ ...props }
			/>
		</>
	)
})

export default InputComponent

const TextInputComponent = (props: TextInputProps) => {
	return <TextInput { ...props } />
}

const NumberInputComponent = (props: NumberInputProps) => {
	return <NumberInput { ...props } />
}
const PasswordInputComponent = (props: PasswordInputProps) => {
	return <PasswordInput { ...props } />
}
