import React from 'react'
import Label from './Label'
import {
	DatePickerInput,
	type DatesRangeValue,
	type DatePickerInputProps,
} from '@mantine/dates'
import { CalendarIcon } from '../Icons'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'

export type DateInputValue = Date | DatesRangeValue | Date[] | undefined

export interface IDateProps extends DatePickerInputProps, IInputProps {
	name?: string
	id?: string
	error?: string | string[]
}

const DateInputComponent = ({
	label,
	id,
	name,
	type = 'default',
	size = 'md',
	radius = 'xs',
	valueFormat = 'L',
	required,
	wrapper,
	wrapperProps,
	value,
	...props
}: IDateProps) => {
	const inputId = id || name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<DatePickerInput
				value={ value || undefined }
				id={ inputId }
				name={ name }
				type={ type }
				radius={ radius }
				size={ size }
				valueFormat={ valueFormat }
				icon={ <CalendarIcon /> }
				clearable
				{ ...props }
			/>
		</InputWrapper>
	)
}

export default DateInputComponent

