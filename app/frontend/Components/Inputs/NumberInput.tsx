import React, { forwardRef } from 'react'
import { NumberInput, type NumberInputProps } from '@mantine/core'
import cn from 'classnames'

const NumberInputComponent = forwardRef<HTMLInputElement, NumberInputProps>((
	{ label, required = false, value, onChange, id, pattern, size = 'md', ...props },
	ref
) => {
	return (
		<>
			{ label && <label className={ cn({ 'required': required }) } htmlFor={ id }>
				{ label }
			</label> }
			<NumberInput
				id={ id }
				value={ value }
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
