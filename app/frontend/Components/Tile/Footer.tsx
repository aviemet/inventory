import React from 'react'
import { Box, type BoxProps, type ElementProps } from '@mantine/core'
import cx from 'clsx'
import * as classes from './Tile.css'

interface ITileFooterProps extends BoxProps, ElementProps<'footer', keyof BoxProps> {}

const Footer = ({ children, className, ...props }: ITileFooterProps) => {
	return (
		<Box
			component="footer"
			className={ cx(classes.footer, className) }
			{ ...props }
		>
			{ children }
		</Box>
	)
}

export default Footer
