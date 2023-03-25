import React from 'react'
import { Checkbox, Sx, type CheckboxProps } from '@mantine/core'

export interface ICheckboxProps extends CheckboxProps {
	sx?: Sx
}

const CheckboxComponent = ({ id, name, sx, ...props }: ICheckboxProps) => {
	const inputId = id ?? name

	return (
		<Checkbox
			id={ inputId }
			name={ name }
			sx={ [{ padding: '14px 10px' }, sx] }
			{ ...props }
		/>
	)
}

export default CheckboxComponent
