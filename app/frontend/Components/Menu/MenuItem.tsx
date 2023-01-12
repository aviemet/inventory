import React, { forwardRef } from 'react'
import { Menu, type MenuItemProps } from '@mantine/core'
import { Link } from '@/Components'

interface IMenuItemProps extends MenuItemProps {
	href?: string
	onClick?: (e: MouseEvent) => void
	disabled?: boolean
	component?: string
	type?: string
}

const MenuItem = forwardRef<HTMLButtonElement, IMenuItemProps>((
	{ children, href, disabled = false, component = Link, ...props },
	ref,
) => {
	return (
		<Menu.Item ref={ ref } disabled={ disabled } { ...props } sx={ theme => {
			if(disabled) return {
				'& *': {
					color: theme.colors.gray[theme.fn.primaryShade()],
					textDecoration: 'line-through',
				},
				'& input[type=checkbox], & input[type=checkbox]:checked': {
					backgroundColor: theme.colors.gray[theme.fn.primaryShade()],
				},
			}
			return {}
		} }>
			{ children }
		</Menu.Item>
	)
})

export default MenuItem
