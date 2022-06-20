import React from 'react'
// import { InputProps } from 'react-html-props'
import { Checkbox, type CheckboxProps } from '@mantine/core'

export interface ICheckboxProps extends CheckboxProps {
	name?: string
}

const CheckboxComponent = ({ onChange, value, id, name, ...props }: ICheckboxProps) => {
	const inputId = id ?? name

	return (
		<Checkbox
			name={ name }
			id={ inputId }
			value={ value }
			onChange={ e => {
				if(onChange) onChange(e)
			} }
			{ ...props }
			sx={ theme => ({
				paddingLeft: theme.spacing.xs
			}) }
		/>
	)
}

export default CheckboxComponent
