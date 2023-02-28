import React from 'react'
import { Paper, type PaperProps } from '@mantine/core'
import Content from './Content'
import Footer from './Footer'
import HoverLink from './HoverLink'
import cx from 'clsx'
import useTileStyles from './useTileStyles'

const Tile = ({ children, className, ...props }: PaperProps) => {
	const { classes } = useTileStyles()

	return (
		<Paper radius="lg" className={ cx(classes.tile, className) } { ...props }>
			{ children }
		</Paper>
	)
}

Tile.Content = Content
Tile.Footer = Footer
Tile.HoverLink = HoverLink

export default Tile
