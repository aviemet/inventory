import { Box } from '@mantine/core'
import React from 'react'

const Footer = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box
			component="footer"
			sx={ theme => ({
				display: 'flex',
				borderBottomRightRadius: 8,
				borderBottomLeftRadius: 8,
				backgroundColor: theme.other.colorSchemeOption(
					theme.fn.lighten(theme.colors[theme.primaryColor][theme.primaryShade.light], 0.75),
					theme.fn.darken(theme.colors[theme.primaryColor][theme.primaryShade.dark], 0.75),
				),

				'& > *': {
					padding: '12px 24px !important',
				},
			}) }
		>
			{ children }
		</Box>
	)
}

export default Footer
