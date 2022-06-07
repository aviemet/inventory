import React from 'react'
import { InputProps } from 'react-html-props'

export interface ICheckboxProps extends InputProps {
	label?: string
	labelPosition?: 'start'|'end'
	name?: string
}

const Checkbox = ({ label, onChange, labelPosition = 'start', type, value, id, name, ...props }: ICheckboxProps) => {
	const inputId = id ?? name

	const Label = () => <label htmlFor={ inputId }>{ label }</label>

	return (
		<>
			{ label && labelPosition === 'start' && <Label /> }
			<input
				name={ name }
				id={ inputId }
				type="checkbox"
				value={ value }
				onChange={ e => {
					if(onChange) onChange(e)
				} }
				{ ...props }
			/>
			{ label && labelPosition === 'end' && <Label /> }
		</>
	)
}

export default Checkbox
