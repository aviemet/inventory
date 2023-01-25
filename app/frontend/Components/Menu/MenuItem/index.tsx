import React, { forwardRef } from 'react'
import { Menu, createPolymorphicComponent, type MenuItemProps } from '@mantine/core'
import { Link } from '@/Components'
import { ILinkProps } from '@/Components/Link'
import useMenuItemStyles from './useMenuItemStyles'


interface IMenuItemProps extends MenuItemProps, Omit<ILinkProps, 'color'|'children'|'href'|'onClick'|'onProgress'> {
	disabled?: boolean
	href?: string
}

const MenuItemProxy = forwardRef<HTMLButtonElement|HTMLAnchorElement, IMenuItemProps>((
	{ href, disabled, className, ...props },
	ref,
) => {
	const { classes, cx } = useMenuItemStyles()
	const mergedClassName = cx(classes, className, { disabled })

	if(href) {
		return <Menu.Item
			component={ Link }
			href={ href }
			className={ mergedClassName }
			disabled={ disabled }
			{ ...props }
			ref={ ref as React.ForwardedRef<HTMLAnchorElement> }
		/>
	}
	return <Menu.Item
		className={ mergedClassName }
		disabled={ disabled }
		{ ...props }
		ref={ ref as React.ForwardedRef<HTMLButtonElement> }
	/>
})

export default createPolymorphicComponent<'button', IMenuItemProps>(MenuItemProxy)
