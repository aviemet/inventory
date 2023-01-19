import React from 'react'
import { Checkbox, type CheckboxProps } from '@mantine/core'

export interface ICheckboxProps extends CheckboxProps {
	name?: string
}

const CheckboxComponent = ({ onChange, value, id, name, label, ...props }: ICheckboxProps) => {
	const inputId = id ?? name

	return (
		<>
			<Checkbox
				label={ label }
				name={ name }
				id={ inputId }
				value={ value }
				required={ props.required }
				onChange={ e => {
					if(onChange) onChange(e)
				} }
				{ ...props }
				sx={ theme => ({
  				padding: '14px 10px 5px 10px',
				}) }
			/>
		</>
	)
}

export default CheckboxComponent
