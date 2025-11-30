import { Textarea as MantineTextarea, type TextareaProps as MantineTextareaProps } from "@mantine/core"
import React, { forwardRef } from "react"

import { InputWrapper } from "./InputWrapper"
import { Label } from "./Label"

import { withInjectedProps, type BaseInputProps } from "."

export interface TextareaProps extends MantineTextareaProps, BaseInputProps {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((
	{
		label,
		name,
		required = false,
		id,
		wrapper,
		wrapperProps,
		disableAutofill = false,
		...props
	},
	ref,
) => {
	const inputId = id || name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<MantineTextarea
				ref={ ref }
				id={ inputId }
				name={ name }
				required={ required }
				{ ...withInjectedProps(props, {
					disableAutofill,
				}) }
			>
			</MantineTextarea>
		</InputWrapper>
	)
})

