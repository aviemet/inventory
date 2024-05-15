import React from 'react'
import { Link } from '@/Components'
import { ActionIcon } from '@mantine/core'
import cx from 'clsx'

interface IMenuLinkProps {
	children: string
	href: string
	icon?: JSX.Element
}

const MenuLink = ({ children, href, icon, ...props }: IMenuLinkProps) => {
	return (
		<Link href={ href } { ...props }>
			<ActionIcon
				c="bright"
				size="xl"
				variant="transparent"
				aria-label={ children }
			>
				{ icon  }
			</ActionIcon>
			<span className={ cx('link-text') }>{ children }</span>
		</Link>
	)
}

export default MenuLink
