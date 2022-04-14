import React from 'react'
import { InputProps } from 'react-html-props'
import classnames from 'classnames'

interface IInputProps extends InputProps {
	label?: string
	name?: string
}

const Input = ({ label, required, value, onChange, type = 'text', id, ...props }: IInputProps) => {
	return (
		<div className={ classnames('field', type, { required }) }>
			{ label && <label className={ classnames({ required }) } htmlFor={ id }>
				{ label }
			</label> }
			<input
				value={ value }
				onChange={ onChange }
				type={ type }
				{ ...required }
				{ ...props }
			/>
		</div>
	)
}

export default Input

