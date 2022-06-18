import React from 'react'
import { Box } from '@mantine/core'

const Section = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box sx={ theme => ({
			backgroundColor: theme.colors.white,
			boxShadow: theme.shadows.md,
			padding: '1rem 0.75rem',
			borderTop: `2px solid ${theme.colors[theme.primaryColor][2]}`,
		}) }>
			{ children }
		</Box>
	)
}

export default Section
