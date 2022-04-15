import React from 'react'
import Navigation from './Navigation'
import { useLayout } from '@/Providers'
import classnames from 'classnames'
import tw, { styled } from 'twin.macro'

import './sidebar.css'

const Sidebar = () => {
	const { layoutState } = useLayout()

	return (
		<SidebarWrapper id="sidebar"  className={ classnames({ 'side-bar-closed': !layoutState.sidebarOpen }) }>
			<Navigation />
		</SidebarWrapper>
	)
}

export default Sidebar

const SidebarWrapper = styled.aside`
	${tw`dark:bg-gray-600 left-0 z-50 w-screen h-screen bg-white shadow`}
	${tw`sm:flex sm:flex-col sm:justify-between sm:w-auto sm:h-auto`}
	transition-property: left;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;

	a, .react-icon {
		${tw`dark:text-white text-gray-700`}
	}

	.react-icon {
		${tw`ml-1`}
		margin-right: var(--sidebar-icon-left-padding);
	}
`