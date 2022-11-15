import React from 'react'
import { Textarea, type TextareaProps } from '@mantine/core'
import Label from './Label'

export interface ITextareaProps extends TextareaProps {
	label?: string
	name: string
}

const TextareaComponent = ({ label, name, required = false, value, onChange, id, radius = 'xs', ...props }: ITextareaProps) => {
	return (
		<>
			{ label && <Label required={ required } htmlFor={ id }>
				{ label }
			</Label> }
			<Textarea
				id={ id }
				name={ name }
				onChange={ onChange }
				value={ String(value) }
				required={ required }
				radius={ radius }
				{ ...props }
			>
			</Textarea>
		</>
	)
}

export default TextareaComponent
