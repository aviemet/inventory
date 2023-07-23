import React, { forwardRef } from 'react'
import { TextInput, type TextInputProps } from '@mantine/core'
import Label from './Label'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface ITextInputProps extends TextInputProps, IInputProps {}

const TextInputComponent = forwardRef<HTMLInputElement, ITextInputProps>((
	{
		name,
		label,
		required = false,
		id,
		size = 'md',
		radius = 'xs',
		wrapper,
		wrapperProps,
		...props
	},
	ref,
) => {
	const inputId = id || name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<TextInput
				ref={ ref }
				name={ name }
				id={ inputId }
				required={ required }
				size={ size }
				radius={ radius }
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default TextInputComponent
