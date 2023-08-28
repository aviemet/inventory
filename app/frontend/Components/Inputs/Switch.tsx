import React from 'react'
import { Switch, Sx, type SwitchProps } from '@mantine/core'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'

export interface ISwitchProps extends SwitchProps, IInputProps {
	sx?: Sx
}

const SwitchComponent = ({ id, name, sx, wrapper, wrapperProps, ...props }: ISwitchProps) => {
	const inputId = id ?? name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			<Switch
				id={ inputId }
				name={ name }
				required={ props.required }
				sx={ [{ padding: '14px 10px' }, sx] }
				{ ...props }
			/>
		</InputWrapper>
	)
}

export default SwitchComponent
