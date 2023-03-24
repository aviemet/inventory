import React from 'react'
import { Switch, type SwitchProps } from '@mantine/core'

export interface ISwitchProps extends SwitchProps {
	name?: string
}

const SwitchComponent = ({ onChange, value, id, name, label, ...props }: ISwitchProps) => {
	const inputId = id ?? name

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(onChange) onChange(e)
	}

	return (
		<>
			<Switch
				id={ inputId }
				label={ label }
				name={ name }
				value={ value }
				onChange={ handleChange }
				required={ props.required }
				{ ...props }
				sx={ { padding: '14px 10px' } }
			/>
		</>
	)
}

export default SwitchComponent
