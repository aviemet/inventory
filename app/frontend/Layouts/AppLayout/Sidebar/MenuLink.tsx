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
			<span>{ children }</span>
			{ icon  }
		</Link>
	)
}

export default MenuLink
