import React from 'react'
import { Paper } from '@mantine/core'
import Content from './Content'
import Footer from './Footer'
import { DivProps } from 'react-html-props'

const Tile = ({ children, ...props }: Omit<DivProps, 'ref'>) => {
	return (
		<Paper radius="lg" { ...props } sx={ theme => ({
			borderColor: theme.fn.primaryColor(),
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
