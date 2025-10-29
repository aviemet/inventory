import React, { forwardRef } from 'react'
import { Box, type BoxProps } from '@mantine/core'
import cx from 'clsx'
import * as classes from './Section.css'

interface SectionProps extends BoxProps, Omit<React.ComponentPropsWithoutRef<'section'>, keyof BoxProps> {
	fullHeight?: boolean
}

const Section = forwardRef<HTMLDivElement, SectionProps>((
	{ children, fullHeight = false, className, ...props },
	ref,
) => {
	return (
		<Box
			ref={ ref }
			component="section"
			className={ cx(classes.section, className, { fullHeight }) }
			{ ...props }
		>
			{ children }
		</Box>
	)
})

export default Section
