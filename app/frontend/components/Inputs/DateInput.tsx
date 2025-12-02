import { DatePickerInput, type DatePickerInputProps } from "@mantine/dates"
import { useEffect, useState, forwardRef } from "react"

import { CalendarIcon } from "@/components/Icons"

import { InputWrapper } from "./InputWrapper"
import { Label } from "./Label"

import { type DateInputValue, type BaseInputProps } from "."


export interface DateInputProps
	extends
	Omit<DatePickerInputProps, "onChange" | "value">,
	BaseInputProps {
	name?: string
	id?: string
	value: DateInputValue
	error?: string | string[]
	onChange?: (date: DateInputValue) => void
}

export const DateInput = forwardRef<HTMLButtonElement, DateInputProps>((
	{
		label,
		id,
		name,
		type = "default",
		size = "md",
		radius = "xs",
		valueFormat = "L",
		required,
		wrapper,
		wrapperProps,
		value,
		onChange,
		...props
	},
	ref,
) => {
	const inputId = id || name

	const normalizedValue = value ?? null
	const [localValue, setLocalValue] = useState<DateInputValue>(normalizedValue)
	const [datePickerType, setDatePickerType] = useState(type)

	const handleChange = (changeValue: DateInputValue | undefined) => {
		const normalizedChangeValue = changeValue ?? null
		setLocalValue(normalizedChangeValue)

		onChange?.(normalizedChangeValue)
	}

	useEffect(() => {
		setLocalValue(normalizedValue)
	}, [normalizedValue])

	// Allow a Date input's type to change
	useEffect(() => {
		if(datePickerType === type) return

		// DatesRangeValue and Date[] are the Array type options
		if(type === "range") {
			if(Array.isArray(localValue)) {
				// An array of length 2 indicates it's already a range of dates
				if(localValue.length !== 2) {
					setLocalValue([localValue[0], null])
				}
			} else {
				setLocalValue(localValue ? [localValue] : null)
			}
		} else {
			setLocalValue(Array.isArray(localValue) ? localValue[0] : null)
		}

		setDatePickerType(type)
	}, [type, datePickerType, localValue])

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<DatePickerInput
				ref={ ref }
				id={ inputId }
				name={ name }
				// @ts-expect-error - TypeScript can't narrow conditional types when type prop is dynamic
				value={ localValue }
				type={ datePickerType }
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
})
