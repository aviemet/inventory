import React from 'react'
import { Switch, type SwitchProps } from '@mantine/core'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface ISwitchProps extends SwitchProps, IInputProps {}

const SwitchComponent = ({ id, name, style, wrapper, wrapperProps, ...props }: ISwitchProps) => {
	const inputId = id ?? name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			<Switch
				id={ inputId }
				name={ name }
				required={ props.required }
				style={ [{ padding: '14px 10px' }, style] }
				{ ...props }
			/>
		</InputWrapper>
	)
}

export default SwitchComponent
