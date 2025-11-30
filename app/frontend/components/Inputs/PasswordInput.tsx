import {
	PasswordInput as MantinePasswordInput,
	type PasswordInputProps as MantinePasswordInputProps,
} from "@mantine/core"
import { forwardRef } from "react"

import { InputWrapper } from "./InputWrapper"
import { Label } from "./Label"

import { type BaseInputProps } from "."

export interface PasswordInputProps extends MantinePasswordInputProps, BaseInputProps {}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((
	{ label, name, required = false, id, size = "md", wrapper, wrapperProps, ...props },
	ref,
) => {
	const inputId = id || name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			{ label && <Label required={ required } htmlFor={ inputId }>
				{ label }
			</Label> }
			<MantinePasswordInput
				id={ inputId }
				name={ name }
				required={ required }
				ref={ ref }
				size={ size }
				{ ...props }
			/>
		</InputWrapper>
	)
})
