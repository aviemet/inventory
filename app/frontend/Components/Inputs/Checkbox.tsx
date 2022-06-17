import React from 'react'
import { InputProps } from 'react-html-props'
import { Checkbox, type CheckboxProps } from '@mantine/core'

export interface ICheckboxProps extends CheckboxProps {
	label?: string
	labelPosition?: 'start'|'end'
	name?: string
}

const CheckboxComponent = ({ label, onChange, labelPosition = 'start', value, id, name, ...props }: ICheckboxProps) => {
	const inputId = id ?? name

	const Label = () => <label htmlFor={ inputId }>{ label }</label>

	return (
		<>
			{ label && labelPosition === 'start' && <Label /> }
			<Checkbox
				name={ name }
				id={ inputId }
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

export default CheckboxComponent
