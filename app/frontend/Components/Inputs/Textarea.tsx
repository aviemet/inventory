import React, { forwardRef } from 'react'
import { Textarea, type TextareaProps } from '@mantine/core'
import Label from './Label'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface ITextareaProps extends TextareaProps, IInputProps { }

const TextareaComponent = forwardRef<HTMLTextAreaElement, ITextareaProps>((
	{
		label,
		name,
		required = false,
		value,
		id,
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
			<Textarea
				ref={ ref }
				id={ inputId }
				name={ name }
				value={ value ? String(value) : '' }
				required={ required }
				radius={ radius }
				{ ...props }
			>
			</Textarea>
		</InputWrapper>
	)
})

export default TextareaComponent
