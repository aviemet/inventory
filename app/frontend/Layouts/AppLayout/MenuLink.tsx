import React from 'react'
import { Link } from '@/Components'

const MenuLink = ({ children, href, icon, ...props }) => {
	return (
		<Link href={ href } { ...props }>{ children }</Link>
	)
}

export default MenuLink