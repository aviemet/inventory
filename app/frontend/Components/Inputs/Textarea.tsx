import React from 'react'
import { Textarea, type TextareaProps } from '@mantine/core'
import cx from 'classnames'

interface ITextareaProps extends TextareaProps {
	label?: string
	name: string
}

const TextareaComponent = ({ label, name, required = false, value, onChange, id, radius = 'xs', ...props }: ITextareaProps) => {
	return (
		<>
			{ label && <label className={ cx({ required }) } htmlFor={ id }>
				{ label }
			</label> }
			<Textarea
				id={ id }
				name={ name }
				onChange={ onChange }
				value={ value }
				required={ required }
				radius={ radius }
				{ ...props }
			>
			</Textarea>
		</>
	)
}

export default TextareaComponent
