import clsx from "clsx"

import { Link, ActionIcon } from "@/components"

interface MenuLinkProps {
	children: string
	href: string
	icon?: JSX.Element
}

const MenuLink = ({ children, href, icon, ...props }: MenuLinkProps) => {
	return (
		<Link href={ href } { ...props }>
			<ActionIcon
				c="bright"
				size="xl"
				variant="transparent"
				aria-label={ children }
			>
				{ icon }
			</ActionIcon>
			<span className={ clsx("link-text") }>{ children }</span>
		</Link>
	)
}

export default MenuLink
