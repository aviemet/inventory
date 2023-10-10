import React, { forwardRef } from 'react'
import { TextInput, type TextInputProps } from '@mantine/core'
import Label from './Label'
import InputWrapper from './InputWrapper'
import { IInputProps } from '.'

export interface ICurrencyInputProps extends TextInputProps, IInputProps {}

const TextInputComponent = forwardRef<HTMLInputElement, ICurrencyInputProps>((
	{ label, name, value, required = false, id, pattern, size = 'md', wrapper, wrapperProps, ...props },
	ref,
) => {
	const inputId = id || name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<TextInput
				id={ inputId }
				required={ required }
				ref={ ref }
				size={ size }
				name={ name }
				value={ value }
				leftSectionPointerEvents="none"
				leftSection="$"
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default TextInputComponent
