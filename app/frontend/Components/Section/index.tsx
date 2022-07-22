import React from 'react'
import { Box, type BoxProps } from '@mantine/core'
import { merge } from 'lodash'
import cx from 'clsx'

interface ISectionProps extends BoxProps<'section'> {
	fullHeight?: boolean
}

const Section = ({ children, sx, fullHeight = false, ...props }: ISectionProps) => {
	return (
		<Box
			component="section"
			sx={ theme => {
				let sectionStyles = {
					backgroundColor: theme.other.colorSchemeOption(theme.white, theme.colors.gray[9]),
					boxShadow: theme.shadows.xs,
					padding: '1rem 0.75rem',
					borderTop: `2px solid ${theme.other.colorSchemeOption(theme.colors[theme.primaryColor][2], theme.colors[theme.primaryColor][9])}`,

					'& + &': {
						marginTop: 10,
					},
				}

				if(sx) {
					let propStyles = {}
					propStyles = typeof sx === 'function' ? sx(theme) : sx
					sectionStyles = merge(sectionStyles, propStyles)
				}

				return sectionStyles
			} }
			className={ cx({ fullHeight }) }
			{ ...props }
		>
			{ children }
		</Box>
	)
}

export default Section
