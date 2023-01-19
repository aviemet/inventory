import React, { forwardRef } from 'react'
import { Menu, packSx, createPolymorphicComponent, type MenuItemProps } from '@mantine/core'
import { Link } from '@/Components'
import { ILinkProps } from '../Link'

interface IMenuItemProps extends MenuItemProps, Omit<ILinkProps, 'color'|'children'> {
	disabled?: boolean
	type?: string
}

const MenuItem = forwardRef<HTMLAnchorElement, IMenuItemProps>((
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

export default createPolymorphicComponent<typeof Link, IMenuItemProps>(MenuItem)
