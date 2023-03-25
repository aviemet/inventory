import React from 'react'
import Label from './Label'
import { DateTimePicker, DateTimePickerProps } from '@mantine/dates'

export interface IDateTimeProps extends DateTimePickerProps {
	label?: string
	name?: string
	id?: string
	value?: Date
	onChange?: (value: Date) => void
	error?: string | string[]
}

const DateTime = ({
	label,
	id,
	name,
	required,
	value = new Date(),
	size = 'md',
	radius = 'xs',
	valueFormat = 'L LT',
	...props
}: IDateTimeProps) => {
	const inputId = id || name

	return (
		<>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<DateTimePicker
				id={ inputId }
				name={ name }
				defaultValue={ value }
				radius={ radius }
				size={ size }
				valueFormat={ valueFormat }
				{ ...props }
			/>
		</>
	)
}

export default DateTime

