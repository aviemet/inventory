import React from 'react'
import { Checkbox, type CheckboxGroupProps } from '@mantine/core'

export interface CheckboxInputGroupProps extends CheckboxGroupProps {
	name?: string
}

const CheckboxGroup = ({ children, ...props }: CheckboxInputGroupProps) => {
	return (
		<Checkbox.Group { ...props }>
			{ children }
		</Checkbox.Group>
	)
}

export default CheckboxGroup
