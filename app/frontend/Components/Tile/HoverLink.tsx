import React from 'react'
import Link, { type ILinkProps } from '@/Components/Link'
import cx from 'clsx'
import useTileStyles from './useTileStyles'

const HoverLink = ({ children, className, ...props }: ILinkProps) => {
	const { classes } = useTileStyles()

	return (
		<Link className={ cx(classes.link, className) } { ...props }>{ children }</Link>
	)
}

export default HoverLink
