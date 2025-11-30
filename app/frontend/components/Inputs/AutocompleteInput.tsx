import { Autocomplete as MantineAutocomplete, type AutocompleteProps as MantineAutocompleteProps } from "@mantine/core"
import React, { forwardRef } from "react"

import { InputWrapper } from "./InputWrapper"

import { withInjectedProps, type BaseInputProps } from "."

export interface AutocompleteProps extends MantineAutocompleteProps, BaseInputProps {}

export const AutocompleteInput = forwardRef<HTMLInputElement, AutocompleteProps>((
	{
		id,
		name,
		style,
		wrapper,
		wrapperProps,
		disableAutofill = true,
		...props },
	ref,
) => {
	const inputId = id ?? name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			<MantineAutocomplete
				ref={ ref }
				id={ inputId }
				name={ name }
				style={ [{ padding: "14px 10px" }, style] }
				wrapperProps={ wrapper ? {} : wrapperProps }
				{ ...withInjectedProps(props, {
					disableAutofill,
				}) }
			/>
		</InputWrapper>
	)
})
