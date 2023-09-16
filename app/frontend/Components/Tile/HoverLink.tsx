import React from 'react'
import { type ILinkProps } from '@/Components/Link'
import { Link } from '@/Components'
import cx from 'clsx'
import useTileStyles from './useTileStyles'

const HoverLink = ({ children, className, ...props }: ILinkProps) => {
	const { classes } = useTileStyles()

	return (
		<Link className={ cx(classes.link, className) } { ...props }>{ children }</Link>
	)
}

export default HoverLink
