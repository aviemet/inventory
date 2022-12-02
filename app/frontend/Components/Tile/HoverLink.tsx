import React from 'react'
import Link, { type ILinkProps } from '@/Components/Link'

const HoverLink = ({ children, ...props }: ILinkProps) => <Link sx={ theme=>({
	flex: 1,
	textAlign: 'center',
	transitionProperty: 'all',
	transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
	transitionDuration: '500ms',
	borderTopWidth: '1px',

	'&:hover': {
		backgroundColor: theme.other.colorSchemeOption(
			theme.colors[theme.primaryColor][2],
			theme.colors[theme.primaryColor][6],
		),
	},
}) } { ...props }>{ children }</Link>

export default HoverLink
