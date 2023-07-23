import React, { useCallback } from 'react'
import Label from './Label'
import { DatePickerInput, type DatePickerInputProps } from '@mantine/dates'
import { CalendarIcon } from '../Icons'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'
import { coerceArray, isUnset } from '@/lib'
import dayjs from 'dayjs'

export interface IDateProps extends Omit<DatePickerInputProps, 'value'|'onChange'>, IInputProps {
	name?: string
	id?: string
	value?: Date[]
	onChange?: (value: Date[]) => void
	error?: string | string[]
}

const DateInputComponent = ({
	label,
	id,
	name,
	value,
	required,
	type = 'default',
	size = 'md',
	radius = 'xs',
	valueFormat = 'L',
	wrapper,
	wrapperProps,
	onChange,
	...props
}: IDateProps) => {
	const inputId = id || name

	const inputValue = useCallback(() => {
		const valueArray = coerceArray(value)

		if(type === 'range' && valueArray.length !== 2) {
			return [valueArray[0], valueArray[1] || dayjs(valueArray[0]).add(1, 'day').toDate()]
		}

		if(type === 'default') return isUnset(valueArray[0]) ? null : valueArray[0]

		return valueArray
	}, [type, value])

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<DatePickerInput
				id={ inputId }
				name={ name }
				value={ inputValue() }
				type={ type }
				radius={ radius }
				size={ size }
				valueFormat={ valueFormat }
				icon={ <CalendarIcon /> }
				{ ...props }
			/>
		</InputWrapper>
	)
}

export default DateInputComponent

