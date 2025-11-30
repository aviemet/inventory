import { Switch as MantineSwitch, type SwitchProps as MantineSwitchProps } from "@mantine/core"
import { forwardRef } from "react"

import { InputWrapper } from "./InputWrapper"

import { type BaseInputProps } from "."

export interface SwitchProps extends MantineSwitchProps, BaseInputProps {}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>((
	{ id, name, style, wrapper, wrapperProps, ...props },
	ref,
) => {
	const inputId = id ?? name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			<MantineSwitch
				ref={ ref }
				id={ inputId }
				name={ name }
				required={ props.required }
				style={ [{ padding: "14px 10px" }, style] }
				{ ...props }
			/>
		</InputWrapper>
	)
})
