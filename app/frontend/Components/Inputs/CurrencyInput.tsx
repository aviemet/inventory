import React, { forwardRef } from 'react'
import { TextInput, type TextInputProps } from '@mantine/core'
import Label from './Label'

const TextInputComponent = forwardRef<HTMLInputElement, TextInputProps>((
	{ label, required = false, value, onChange, id, pattern, size = 'md', ...props },
	ref
) => {
	return (
		<>
			{ label && <Label required={ required } htmlFor={ id }>
				{ label }
			</Label> }
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
