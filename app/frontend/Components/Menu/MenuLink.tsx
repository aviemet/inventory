import React, { forwardRef } from 'react'
import { Menu, createPolymorphicComponent, type MenuItemProps as MantineItemProps } from '@mantine/core'
import cx from 'clsx'
import { Link } from '@/Components'
import { LinkProps } from '../Link'
import * as classes from './Menu.css'

interface MenuItemProps extends MantineItemProps, Omit<LinkProps, 'color'|'children'|'classNames'|'styles'> {
	disabled?: boolean
	type?: string
}

const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>((
	{ children, disabled = false, className, ...props },
	ref,
) => {

	return (
		<Menu.Item
			ref={ ref }
			disabled={ disabled }
			component={ Link }
			className={ cx(classes.menuItem, className, { disabled }) }
			{ ...props }
		>
			{ children }
		</Menu.Item>
	)
})

export default createPolymorphicComponent<typeof Link, MenuItemProps>(MenuItem)
