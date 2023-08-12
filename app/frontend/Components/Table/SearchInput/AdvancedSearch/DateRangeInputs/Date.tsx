import { DateInput } from '@/Components/Inputs'
import React, { useEffect, useState } from 'react'
import { type DateInputValue } from '@/Components/Inputs/DateInput'
import { type IAdvancedInputProps } from '.'
import { type DateValue } from '@mantine/dates'


const Date = ({
	advancedSearch,
	name,
}: IAdvancedInputProps) => {
	const { values, inputProps, setInputValue } = advancedSearch

	const { mb, wrapperProps } = inputProps<DateInputValue>(name)

	const [internalStartDate, setInternalStartDate] = useState(values.get(`${name}[start]`))
	const [internalEndDate, setInternalEndDate] = useState(values.get(`${name}[end]`))

	useEffect(() => {
		setInputValue(`${name}[start]`, internalStartDate)
		setInputValue(`${name}[end]`, internalEndDate)
	}, [internalStartDate, internalEndDate])

	const handleDateChange = (value: DateValue) => {
		if(Array.isArray(value)) {
			setInternalStartDate(value[0])
			setInternalEndDate(value[1])
		} else {
			setInternalStartDate(value)
			setInternalEndDate(null)
		}
	}

	return (
		<>
			<DateInput
				label="Date"
				{ ...{ mb, wrapperProps } }
				onChange={ handleDateChange }
				type={ values.get(`${name}[type]`) === 'range' ? 'range' : 'default' }
			/>
		</>
	)
}

export default Date
