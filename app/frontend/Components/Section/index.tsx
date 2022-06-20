import React from 'react'
import { Box, type BoxProps } from '@mantine/core'
import { merge } from 'lodash'

interface ISectionProps extends BoxProps<'section'> {
	fullHeight?: boolean
}

const Section = ({ children, sx, fullHeight = false, ...props }: ISectionProps) => {
	return (
		<Box
			component="section"
			sx={ theme => {
				let sectionStyles = {
					backgroundColor: theme.other.colorSchemeOption(theme.white, theme.black),
					boxShadow: theme.shadows.xs,
					padding: '1rem 0.75rem',
					borderTop: `2px solid ${theme.colors[theme.primaryColor][2]}`,
				}

				if(sx) {
					let propStyles = {}
					propStyles = typeof sx === 'function' ? sx(theme) : sx
					sectionStyles = merge(sectionStyles, propStyles)
				}

				if(fullHeight) {
					sectionStyles = merge(sectionStyles, {
						height: `calc(100vh - ${theme.other.header.height}px - ${theme.other.footer.height}px - 20px)`,
					})
				}

				return sectionStyles
			} }
			{ ...props }
		>
			{ children }
		</Box>
	)
}

export default Section
