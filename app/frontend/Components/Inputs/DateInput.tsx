import React, { useEffect, useState } from 'react'
import Label from './Label'
import {
	DatePickerInput,
	type DatesRangeValue,
	type DatePickerInputProps,
	DateValue,
} from '@mantine/dates'
import { CalendarIcon } from '../Icons'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'
import { isUnset } from '@/lib'

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
	onChange,
	...props
}: IDateProps) => {
	const inputId = id || name

	const [localValue, setLocalValue] = useState<DateValue | Date[] | DatesRangeValue | undefined>(value)
	const [localType, setLocalType] = useState(type)

	const handleChange = (changeValue: DateValue | Date[] | DatesRangeValue) => {
		setLocalValue(changeValue)

		onChange?.(changeValue)
	}

	useEffect(() => {
		if(localType === type) return

		if(type === 'range') {
			setLocalValue([localValue ?? null, null])
		} else {
			setLocalValue(Array.isArray(localValue) ? localValue[0] : null)
		}

		setLocalType(type)
	}, [type, localType, localValue])

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<DatePickerInput
				id={ inputId }
				name={ name }
				value={ isUnset(localValue) ? undefined : localValue }
				type={ localType }
				onChange={ handleChange }
				radius={ radius }
				size={ size }
				valueFormat={ valueFormat }
				leftSection={ <CalendarIcon /> }
				leftSectionPointerEvents="none"
				clearable
				{ ...props }
			/>
		</InputWrapper>
	)
}

export default DateInputComponent

