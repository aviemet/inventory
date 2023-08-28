import React, { forwardRef } from 'react'
import { NumberInput, type NumberInputProps } from '@mantine/core'
import Label from './Label'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface INumberInputProps extends NumberInputProps, IInputProps {}

const NumberInputComponent = forwardRef<HTMLInputElement, INumberInputProps>((
	{ label, name, required = false, value, id, size = 'md', wrapper, wrapperProps, ...props },
	ref,
) => {
	const inputId = id || name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<NumberInput
				id={ inputId }
				value={ value }
				required={ required }
				ref={ ref }
				size={ size }
				{ ...props }
			/>
		</InputWrapper>
	)
})

export default NumberInputComponent
