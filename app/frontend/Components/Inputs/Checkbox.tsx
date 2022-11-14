import React from 'react'
import { Checkbox, type CheckboxProps } from '@mantine/core'
import Label from './Label'

export interface ICheckboxProps extends CheckboxProps {
	name?: string
}

const CheckboxComponent = ({ onChange, value, id, name, label, ...props }: ICheckboxProps) => {
	const inputId = id ?? name

	return (
		<>
			{ /* { label && <Label required={ props.required } htmlFor={ inputId }>
				{ label }
			</Label> } */ }
			<Checkbox
				label={ label }
				name={ name }
				id={ inputId }
				value={ value }
				onChange={ e => {
					if(onChange) onChange(e)
				} }
				{ ...props }
				sx={ theme => ({
  				padding: '14px 10px 5px 10px'
					// paddingLeft: theme.spacing.xs
				}) }
				required={ props.required }
			/>
		</>
	)
}

export default CheckboxComponent
