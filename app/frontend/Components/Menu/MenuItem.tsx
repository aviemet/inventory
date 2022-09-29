import React, { forwardRef } from 'react'
import { Menu, type MenuItemProps } from '@mantine/core'
import { Link } from '@/Components'

interface IMenuItemProps extends MenuItemProps {
	href?: string
	onClick?: (e: MouseEvent) => void
}

const MenuItem = forwardRef<HTMLButtonElement | HTMLAnchorElement, IMenuItemProps>((
	{ children, href, onClick, ...props },
	ref
) => {
	if(href) {
		return (
			<Menu.Item ref={ ref } component={ Link } href={ href } { ...props } { ...onClick }>{ children }</Menu.Item>
		)
	}

	return (
		<Menu.Item ref={ ref } { ...props } { ...onClick }>{ children }</Menu.Item>
	)
})

export default MenuItem
