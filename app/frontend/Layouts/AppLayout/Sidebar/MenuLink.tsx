import React from 'react'
import { Link } from '@/Components'
import { ActionIcon } from '@mantine/core'

interface IMenuLinkProps {
	children: string
	href: string
	icon?: JSX.Element
}

const MenuLink = ({ children, href, icon, ...props }: IMenuLinkProps) => {
	return (
		<Link href={ href } { ...props }>
			<ActionIcon color="dark" size="xl" variant="transparent">{ icon  }</ActionIcon>
			<span>{ children }</span>
		</Link>
	)
}

export default MenuLink
