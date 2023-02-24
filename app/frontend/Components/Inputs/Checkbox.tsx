import React from 'react'
import { Checkbox, type CheckboxProps } from '@mantine/core'

export interface ICheckboxProps extends CheckboxProps {
	name?: string
}

const CheckboxComponent = ({ onChange, value, id, name, label, ...props }: ICheckboxProps) => {
	const inputId = id ?? name

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(onChange) onChange(e)
	}

	return (
		<>
			<Checkbox
				id={ inputId }
				label={ label }
				name={ name }
				value={ value }
				onChange={ handleChange }
				required={ props.required }
				{ ...props }
				sx={ { padding: '14px 10px 5px 10px' } }
			/>
		</>
	)
}

export default CheckboxComponent
