import React, { forwardRef } from 'react'
import { PasswordInput, type PasswordInputProps } from '@mantine/core'
import Label from './Label'

const PasswordInputComponent = forwardRef<HTMLInputElement, PasswordInputProps>((
	{ label, required = false, value, onChange, id, pattern, size = 'md', ...props },
	ref
) => {
	return (
		<>
			{ label && <Label required={ required } htmlFor={ id }>
				{ label }
			</Label> }
			<PasswordInput
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

export default PasswordInputComponent
