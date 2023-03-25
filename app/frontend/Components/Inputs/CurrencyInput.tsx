import React, { forwardRef } from 'react'
import { TextInput, type TextInputProps } from '@mantine/core'
import Label from './Label'

const TextInputComponent = forwardRef<HTMLInputElement, TextInputProps>((
	{ label, name, value, required = false, id, pattern, size = 'md', ...props },
	ref,
) => {
	const inputId = id || name

	return (
		<>
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
				pattern="[0-9.,]"
				icon='$'
				{ ...props }
			/>
		</>
	)
})

export default TextInputComponent
