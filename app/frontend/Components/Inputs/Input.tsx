import React from 'react'
import { InputProps } from 'react-html-props'
import cx from 'classnames'

interface IInputProps extends InputProps {
	label?: string
	name?: string
}

const Input = ({ label, required = false, value, onChange, type = 'text', id, ...props }: IInputProps) => {
	return (
		<>
			{ label && <label className={ cx({ 'required': required }) } htmlFor={ id }>
				{ label }
			</label> }
			<input
				id={ id }
				value={ value }
				onChange={ onChange }
				type={ type }
				required={ required }
				{ ...props }
			/>
		</>
	)
}

export default Input

