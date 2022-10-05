import React, { forwardRef } from 'react'
import { Menu, type MenuItemProps } from '@mantine/core'
import { Link } from '@/Components'

interface IMenuItemProps extends MenuItemProps {
	href?: string
	onClick?: (e: MouseEvent) => void
	disabled?: boolean
}

const MenuItem = forwardRef<HTMLButtonElement | HTMLAnchorElement, IMenuItemProps>((
	{ children, href, disabled = false, ...props },
	ref
) => {
	const menutItemProps: Partial<typeof props & { component: typeof Link, href: string }> = props
	if(href && !disabled) {
		menutItemProps.component = Link
		menutItemProps.href = href
	}

	return (
		<Menu.Item ref={ ref } { ...menutItemProps } sx={ theme => {
			if(disabled) return {
				color: theme.colors.gray[theme.fn.primaryShade()],
				textDecoration: 'line-through'
			}
			return {}
		} }>
			{ children }
		</Menu.Item>
	)
})

export default MenuItem
