import React from 'react'
import { Paper } from '@mantine/core'
import Content from './Content'
import Footer from './Footer'

const Tile = ({ children }: { children: React.ReactNode }) => {
	return (
		<Paper radius="lg" sx={ theme => ({
			borderColor: theme.other.colorSchemeOption(theme.colors[theme.primaryColor][theme.primaryShade.light], theme.colors[theme.primaryColor][theme.primaryShade.dark]),
			borderTopWidth: 2,
			boxShadow: theme.shadows.md,
			width: '100%',
			maxWidth: '24rem',
		}) }>
			{ children }
		</Paper>
	)
}

Tile.Content = Content
Tile.Footer = Footer

export default Tile
