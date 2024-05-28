import React from 'react'
import { type LinkProps } from '@/Components/Link'
import { Link } from '@/Components'
import cx from 'clsx'
import * as classes from './Tile.css'

const HoverLink = ({ children, className, ...props }: LinkProps) => {
	return (
		<Link className={ cx(classes.link, className) } { ...props }>{ children }</Link>
	)
}

export default HoverLink
