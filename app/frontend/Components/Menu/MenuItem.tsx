import React, { forwardRef } from 'react'
import { Menu, packSx, createPolymorphicComponent, type MenuItemProps } from '@mantine/core'
import { Link } from '@/Components'
import { ILinkProps } from '../Link'

interface IMenuItemProps extends MenuItemProps {
	href?: string
	onClick?: (e: MouseEvent) => void
	disabled?: boolean
	type?: string
}

const MenuItem = forwardRef<HTMLLinkElement, IMenuItemProps>((
	{ children, disabled = false, sx, ...props },
	ref,
) => {
	return (
		<Menu.Item
			ref={ ref }
			disabled={ disabled }
			{ ...props }
			component={ Link }
			sx={ [theme => {
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
			}, ...packSx(sx)] }>
			{ children }
		</Menu.Item>
	)
})

export default createPolymorphicComponent<typeof Link, ILinkProps>(MenuItem)
