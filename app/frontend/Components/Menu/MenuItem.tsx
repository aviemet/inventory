import React from 'react'
import { Menu, type MenuItemProps } from '@mantine/core'
import { Link } from '@/Components'

interface IMenuItemProps extends MenuItemProps<'button'> {
	href?: string
}

const MenuItem = ({ children, href, ...props }: IMenuItemProps) => {
	if(href) {
		return (
			<Link href={ href }>
				<Menu.Item { ...props }>{ children }</Menu.Item>
			</Link>
		)
	}

	return (
		<Menu.Item { ...props }>{ children }</Menu.Item>
	)
}

export default MenuItem
