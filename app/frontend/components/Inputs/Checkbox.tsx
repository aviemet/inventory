import { Checkbox as MantineCheckbox, type CheckboxProps as MantineCheckboxProps } from "@mantine/core"
import React, { forwardRef } from "react"

import { InputWrapper } from "./InputWrapper"

import { type BaseInputProps } from "."

export interface CheckboxProps extends MantineCheckboxProps, BaseInputProps {}

type CheckboxComponentType = React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<HTMLInputElement>
> & {
	Group: typeof MantineCheckbox.Group
};

const CheckboxComponentBase = forwardRef<HTMLInputElement, CheckboxProps>((
	{ id, name, wrapper, wrapperProps, ...props },
	ref,
) => {
	const inputId = id ?? name

	return (
		<InputWrapper wrapper={ wrapper } wrapperProps={ wrapperProps }>
			<MantineCheckbox
				ref={ ref }
				id={ inputId }
				name={ name }
				{ ...props }
			/>
		</InputWrapper>
	)
}) as React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>

export const CheckboxInput = Object.assign(CheckboxComponentBase, {
	Group: MantineCheckbox.Group,
}) as CheckboxComponentType
