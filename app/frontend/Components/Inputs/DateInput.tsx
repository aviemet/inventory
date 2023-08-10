import React, { useCallback } from 'react'
import Label from './Label'
import {
	DatePickerInput,
	type DatesRangeValue,
	type DatePickerInputProps,
} from '@mantine/dates'
import { CalendarIcon } from '../Icons'
import { IInputProps } from '.'
import InputWrapper from './InputWrapper'
import { coerceArray, isUnset } from '@/lib'
import dayjs from 'dayjs'

export type DateInputValue = Date | DatesRangeValue | Date[]

type TDateOmitProps = 'onChange'|'onDateChange'|'onMonthSelect'|'onConNextDecade'|'onNextMonth'|'onNextYear'|'onPreviousDecade'|'onPreviousMonth'|'onPreviousYear'|'onYearSelect'

export interface IDateProps extends Omit<DatePickerInputProps, TDateOmitProps>, IInputProps {
	name?: string
	id?: string
	error?: string | string[]
	onChange: (value: Date[]) => void
	onDateChange: (value: Date[]) => void
	onMonthSelect: (value: Date[]) => void
	onConNextDecade: (value: Date[]) => void
	onNextMonth: (value: Date[]) => void
	onNextYear: (value: Date[]) => void
	onPreviousDecade: (value: Date[]) => void
	onPreviousMonth: (value: Date[]) => void
	onPreviousYear: (value: Date[]) => void
	onYearSelect: (value: Date[]) => void
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
	...props
}: IDateProps) => {
	const inputId = id || name

	const inputValue = useCallback(() => {
		const valueArray = coerceArray(value)

		if(type === 'range' && valueArray.length !== 2) {
			return [valueArray[0], valueArray[1] || dayjs(valueArray[0]).add(1, 'day').toDate()]
		}

		if(type === 'default' && isUnset(valueArray[0])) {
			return undefined
		}

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
				clearable

				onChange={ inputValue }
				onDateChange={ inputValue }
				onMonthSelect={ inputValue }
				onConNextDecade={ inputValue }
				onNextMonth={ inputValue }
				onNextYear={ inputValue }
				onPreviousDecade={ inputValue }
				onPreviousMonth={ inputValue }
				onPreviousYear={ inputValue }
				onYearSelect={ inputValue }
				{ ...props }
			/>
		</InputWrapper>
	)
}

export default DateInputComponent

