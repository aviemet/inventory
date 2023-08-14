import React, { useEffect, useState } from 'react'
import { DateInput } from '@/Components/Inputs'
import { type DateInputValue } from '@/Components/Inputs/DateInput'
import { type IAdvancedInputProps } from '.'
import { DatesRangeValue, type DateValue } from '@mantine/dates'

const Date = ({
	advancedSearch,
	name,
}: IAdvancedInputProps) => {
	const { values, inputProps, setInputValue } = advancedSearch

	const { mb, wrapperProps } = inputProps<DateInputValue>(name)

	const [localValue, setLocalValue] = useState<DateValue | DatesRangeValue>()

	const handleDateChange = (value: DateValue) => {
		setLocalValue(value)

		if(Array.isArray(value)) {
			setInputValue(`${name}[start]`, value[0])
			setInputValue(`${name}[end]`, value[1])
		} else {
			setInputValue(`${name}[start]`, value)
			setInputValue(`${name}[end]`, null)
		}
	}

	const type = values.get(`${name}[type]`) === 'range' ? 'range' : 'default'

	useEffect(() => {
		setLocalValue(type === 'default' ? null : [null, null])
	}, [type])

	/**
	 * Conditionally render each DateInput type to avoid a React rendering error
	 */
	return (
		<DateInput
			label="Date"
			value={ localValue }
			{ ...{ mb, wrapperProps } }
			onChange={ handleDateChange }
			type={ type }
		/>
	)
}

export default Date
