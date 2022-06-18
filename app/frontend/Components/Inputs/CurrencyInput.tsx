import React, { forwardRef } from 'react'
import { TextInput, type TextInputProps } from '@mantine/core'
import cn from 'classnames'

const TextInputComponent = forwardRef<HTMLInputElement, TextInputProps>((
	{ label, required = false, value, onChange, id, pattern, size = 'md', ...props },
	ref
) => {
	return (
		<>
			{ label && <label className={ cn({ 'required': required }) } htmlFor={ id }>
				{ label }
			</label> }
			<TextInput
				id={ id }
				value={ value }
				onChange={ onChange }
				required={ required }
				ref={ ref }
				pattern={ pattern }
				size={ size }
				icon='$'
				{ ...props }
			/>
		</>
	)
})

export default TextInputComponent
