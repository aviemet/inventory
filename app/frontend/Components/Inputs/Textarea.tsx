import React from 'react'
import { TextAreaProps } from 'react-html-props'
import cx from 'classnames'

interface ITextareaProps extends TextAreaProps {
	label?: string
	name: string
}

const Textarea = ({ label, name, required = false, value, onChange, id, ...props }: ITextareaProps) => {
	return (
		<>
			{ label && <label className={ cx({ required }) } htmlFor={ id }>
				{ label }
			</label> }
			<textarea
				id={ id }
				name={ name }
				onChange={ onChange }
				value={ value }
				required={ required }
				{ ...props }
			>
			</textarea>
		</>
	)
}

export default Textarea
