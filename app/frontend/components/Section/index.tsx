import { Box, type BoxProps } from "@mantine/core"
import clsx from "clsx"
import React, { forwardRef } from "react"

import * as classes from "./Section.css"

interface SectionProps extends BoxProps, Omit<React.ComponentPropsWithoutRef<"section">, keyof BoxProps> {
	fullHeight?: boolean
}

export const Section = forwardRef<HTMLDivElement, SectionProps>((
	{ children, fullHeight = false, className, ...props },
	ref,
) => {
	return (
		<Box
			ref={ ref }
			component="section"
			className={ clsx(classes.section, className, { fullHeight }) }
			{ ...props }
		>
			{ children }
		</Box>
	)
})
