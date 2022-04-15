import React from 'react'
import Navigation from './Navigation'
import { useLayout } from '@/Providers'
import classnames from 'classnames'
import tw, { styled } from 'twin.macro'

import './sidebar.css'

const Sidebar = () => {
	const { layoutState } = useLayout()

	return (
		<aside id="sidebar" className={ classnames({ 'side-bar-closed': !layoutState.sidebarOpen }) }>
			<Navigation />
		</aside>
	)
}

export default Sidebar
