import React from 'react'
import { InputProps } from 'react-html-props'

export interface ICheckboxProps extends InputProps {
	label?: string
	labelPosition?: 'start'|'end'
	name?: string
}

const Checkbox = ({ label, onChange, labelPosition = 'start', type, value, id, ...props }: ICheckboxProps) => {
	return (
		<>
			{ label && labelPosition === 'start' && <label htmlFor={ id }>{ label }</label> }
			<input
				id={ id }
				type="checkbox"
				value={ value }
				onChange={ e => {
					if(onChange) onChange(e)
				} }
				{ ...props }
			/>
			{ label && labelPosition === 'end' && <label htmlFor={ id }>{ label }</label> }
		</>
	)
}

export default Checkbox
