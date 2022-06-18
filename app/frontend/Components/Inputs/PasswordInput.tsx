import React, { forwardRef } from 'react'
import { PasswordInput, type PasswordInputProps } from '@mantine/core'
import cn from 'classnames'

const PasswordInputComponent = forwardRef<HTMLInputElement, PasswordInputProps>((
	{ label, required = false, value, onChange, id, pattern, size = 'md', ...props },
	ref
) => {
	return (
		<>
			{ label && <label className={ cn({ 'required': required }) } htmlFor={ id }>
				{ label }
			</label> }
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
