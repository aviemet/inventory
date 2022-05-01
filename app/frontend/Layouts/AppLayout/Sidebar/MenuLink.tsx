import React from 'react'
import { Link } from '@/Components'

interface IMenuLinkProps {
	children: string
	href: string
	icon?: JSX.Element
}

const MenuLink = ({ children, href, icon, ...props }: IMenuLinkProps) => {
	return (
		<Link href={ href } { ...props }>
			{ icon  }
			<span>{ children }</span>
		</Link>
	)
}

export default MenuLink
