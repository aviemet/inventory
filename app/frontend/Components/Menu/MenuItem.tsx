import React from 'react'
import { Menu, type MenuItemProps } from '@mantine/core'
import { Link } from '@/Components'

interface IMenuItemProps extends MenuItemProps {
	href?: string
}

const MenuItem = ({ children, href, ...props }: IMenuItemProps) => {
	if(href) {
		return (
			<Menu.Item component={ Link } href={ href } { ...props }>{ children }</Menu.Item>
		)
	}

	return (
		<Menu.Item { ...props }>{ children }</Menu.Item>
	)
}

export default MenuItem
