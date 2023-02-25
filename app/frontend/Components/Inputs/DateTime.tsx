import React from 'react'
import Label from './Label'
import { type InputProps } from '@mantine/core'
import { DateTimePicker } from 'mantine-dates-6'

export interface IDateTimeProps extends InputProps {
	label?: string
	name?: string
	id?: string
	value?: Date
	onChange?: (value: Date) => void
	error?: string | string[]
}

const DateTime = ({ label, id, required, value = new Date(), size = 'md', radius = 'xs', ...props }: IDateTimeProps) => {
	return (
		<>
			{ label && <Label required={ required } htmlFor={ id }>
				{ label }
			</Label> }
			<DateTimePicker
				defaultValue={ new Date() }
				radius={ radius }
				size={ size }
				valueFormat='L LT'
				{ ...props }
			/>
		</>
	)
}

export default DateTime
