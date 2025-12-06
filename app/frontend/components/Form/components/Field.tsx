import { Box, BoxProps } from "@mantine/core"
import clsx from "clsx"
import React from "react"

import { type InputType } from "@/types"

import { useFormFormat } from "../Form"

export interface FieldProps extends BoxProps {
	children: React.ReactNode
	type?: InputType
	required?: boolean
	errors?: boolean
}

export function Field({
	children,
	type,
	required = false,
	errors = false,
	className,
	...props
}: FieldProps) {
	const { disableFormatting } = useFormFormat()

	return (
		<Box
			className={ clsx(
				"field",
				{ [String(type)]: type },
				{ "required": required },
				{ "field_with_errors": errors },
				{ "no-grid": disableFormatting },
				className,
			) }
			{ ...props }
		>
			{ children }
		</Box>
	)
}
