import React from 'react'
import { AProps } from 'react-html-props'

interface IStickyLinkProps extends Omit<AProps, 'href'> {
	section: string
}

export const StickyLink = ({ children, section, ...props }: IStickyLinkProps) => {
	return (
		<a href={ `#${section}` } { ...props }>{ children }</a>
	)
}

interface IStickyTarget {
	id: string
}

export const StickyTarget  = ({ id }: IStickyTarget) => {
	return (
		<a id={ id }></a>
	)
}
