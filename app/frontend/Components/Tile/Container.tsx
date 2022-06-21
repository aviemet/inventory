import { Box } from '@mantine/core'
import React from 'react'
import 'twin.macro'

const Tile = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box sx={ theme => ({
			backgroundColor: theme.other.colorSchemeOption(theme.white, theme.colors.gray[9]),
			borderColor: theme.primaryColor,
			borderTopWidth: 2,
			borderRadius: theme.radius.lg,
			boxShadow: theme.shadows.md,
			width: '100%',
			maxWidth: '24rem',
		}) }>
			{ children }
		</Box>
	)
}

export default Tile
