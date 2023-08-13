import React from 'react'
import { DateInput } from '@/Components/Inputs'
import { type DateInputValue } from '@/Components/Inputs/DateInput'
import { type IAdvancedInputProps } from '.'
import { type DateValue } from '@mantine/dates'

const Date = ({
	advancedSearch,
	name,
}: IAdvancedInputProps) => {
	const { values, inputProps, setInputValue } = advancedSearch

	const { mb, wrapperProps } = inputProps<DateInputValue>(name)

	const handleDateChange = (value: DateValue) => {
		if(Array.isArray(value)) {
			setInputValue(`${name}[start]`, value[0])
			setInputValue(`${name}[end]`, value[1])
		} else {

			setInputValue(`${name}[start]`, value)
			setInputValue(`${name}[end]`, null)
		}
	}

	const type = values.get(`${name}[type]`) === 'range' ? 'range' : 'default'

	/**
	 * Conditionally render each DateInput type to avoid a React rendering error
	 */
	return (
		<DateInput
			label="Date"
			{ ...{ mb, wrapperProps } }
			onChange={ handleDateChange }
			type={ type }
		/>
	)
}

export default Date
