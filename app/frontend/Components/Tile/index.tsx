import React from 'react'
import { Paper, type PaperProps, type ElementProps } from '@mantine/core'
import Content from './Content'
import Footer from './Footer'
import HoverLink from './HoverLink'
import cx from 'clsx'
import * as classes from './Tile.css'

interface ITileProps extends PaperProps, ElementProps<'div', keyof PaperProps> {}

const Tile = ({ children, className, ...props }: ITileProps) => {
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
