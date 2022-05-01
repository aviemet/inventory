import React from 'react'
import Navigation from './Navigation'
import { useLayout } from '@/Providers'
import cn from 'classnames'
import tw, { styled } from 'twin.macro'

import './sidebar.css'

const Sidebar = () => {
	const { layoutState } = useLayout()

	return (
		<aside id="sidebar">
			<Navigation />
		</aside>
	)
}

export default Sidebar
