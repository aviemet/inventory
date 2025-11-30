import { router } from "@inertiajs/react"
import { MultiSelect as MantineMultiSelect, type ComboboxData, type MultiSelectProps as MantineMultiSelectInputProps } from "@mantine/core"
import { forwardRef } from "react"

import { coerceArray } from "@/lib"

import { InputWrapper } from "./InputWrapper"
import { Label } from "./Label"

import { withInjectedProps, type BaseInputProps } from "."

export interface MultiSelectInputProps extends Omit<MantineMultiSelectInputProps, "data">, BaseInputProps {
	options?: ComboboxData
	fetchOnOpen?: string
}

export const MultiSelectInput = forwardRef<HTMLInputElement, MultiSelectInputProps>((
	{
		options = [],
		label,
		required,
		id,
		name,
		size = "md",
		maxDropdownHeight = 400,
		wrapper,
		wrapperProps,
		fetchOnOpen,
		onDropdownOpen,
		disableAutofill = false,
		...props
	},
	ref,
) => {
	const inputId = id || name

	const handleDropdownOpen = () => {
		if(fetchOnOpen) {
			router.reload({ only: coerceArray(fetchOnOpen) })
		}

		onDropdownOpen?.()
	}

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<MantineMultiSelect
				ref={ ref }
				// Add "search" suffix to prevent password managers trying to autofill dropdowns
				id={ `${inputId}-search` }
				autoComplete="off"
				name={ name }
				size={ size }
				data={ options }
				required={ required }
				maxDropdownHeight={ maxDropdownHeight }
				onDropdownOpen={ handleDropdownOpen }
				nothingFoundMessage="No Results"
				{ ...withInjectedProps(props, {
					disableAutofill,
				}) }
			/>
		</InputWrapper>
	)
})
