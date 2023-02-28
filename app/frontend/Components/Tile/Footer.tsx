import { Box, type BoxProps } from '@mantine/core'
import React from 'react'
import cx from 'clsx'
import { FooterProps } from 'react-html-props'
import useTileStyles from './useTileStyles'

interface ITileFooterProps extends BoxProps, Omit<FooterProps, 'ref'> {}

const Footer = ({ children, className, ...props }: ITileFooterProps) => {
	const { classes } = useTileStyles()

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
