import React, { forwardRef } from 'react'
import { NumberInput, type NumberInputProps } from '@mantine/core'
import Label from './Label'

const NumberInputComponent = forwardRef<HTMLInputElement, NumberInputProps>((
	{ label, required = false, value, onChange, id, pattern, size = 'md', ...props },
	ref
) => {
	return (
		<>
			{ label && <Label required={ required } htmlFor={ id }>
				{ label }
			</Label> }
			<NumberInput
				id={ id }
				value={ Number(value) }
				onChange={ onChange }
				required={ required }
				ref={ ref }
				pattern={ pattern }
				size={ size }
				{ ...props }
			/>
		</>
	)
})

export default NumberInputComponent
