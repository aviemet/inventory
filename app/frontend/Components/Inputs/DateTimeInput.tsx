import React from 'react'
import Label from './Label'
import { DateTimePicker, DateTimePickerProps } from '@mantine/dates'
import { CalendarIcon } from '../Icons'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'
import { isUnset } from '@/lib'

export interface IDateTimeProps extends DateTimePickerProps, IInputProps {
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
	wrapper,
	wrapperProps,
	...props
}: IDateTimeProps) => {
	const inputId = id || name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<DateTimePicker
				id={ inputId }
				name={ name }
				value={ isUnset(value) ? null : new Date(value) }
				radius={ radius }
				size={ size }
				valueFormat={ valueFormat }
				leftSection={ <CalendarIcon /> }
				leftSectionPointerEvents="none"
				{ ...props }
			/>
		</InputWrapper>
	)
}

export default DateTime

