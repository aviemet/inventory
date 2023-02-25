import React, { forwardRef } from 'react'
import { TextInput, type TextInputProps } from '@mantine/core'
import Label from './Label'

const TextInputComponent = forwardRef<HTMLInputElement, TextInputProps>((
	{ label, required = false, id, size = 'md', radius = 'xs', ...props },
	ref,
) => {
	return (
		<>
			{ label && <Label required={ required } htmlFor={ id }>
				{ label }
			</Label> }
			<TextInput
				id={ id }
				required={ required }
				ref={ ref }
				size={ size }
				radius={ radius }
				{ ...props }
			/>
		</>
	)
})

export default TextInputComponent
