import { DatePickerInput, type DatePickerInputProps } from "@mantine/dates"
import { useMemo, forwardRef } from "react"

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

	const normalizedValue = useMemo(() => {
		const val = value ?? null
		if(type === "range") {
			if(Array.isArray(val)) {
				return val.length === 2 ? val : [val[0] ?? null, null]
			}
			if(val !== null && val !== undefined) {
				return [val, null]
			}
			return [null, null]
		}
		return Array.isArray(val) ? (val[0] ?? null) : (val ?? null)
	}, [value, type])

	const handleChange = (changeValue: DateInputValue | undefined) => {
		onChange?.(changeValue ?? null)
	}

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
				value={ normalizedValue }
				type={ type }
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
