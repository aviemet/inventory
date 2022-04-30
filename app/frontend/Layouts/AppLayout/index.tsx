import React from 'react'
import { useLayout } from '@/Providers'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from '../Footer'
import cx from 'classnames'
import tw, { styled } from 'twin.macro'

const AppLayout = ({ children }) => {
	const { layoutState } = useLayout()
	return (
		<AppWrapper className={ cx({ 'side-bar-closed': !layoutState.sidebarOpen }) }>
			<Sidebar />
			<Topbar />
			<main id="content-wrapper" scroll-region="true">
				{ children 	}
			</main>
			<Footer />
		</AppWrapper>
	)
}

export default AppLayout

const AppWrapper = styled.div`
	${ tw`dark:bg-gray-700 grid h-screen gap-0 bg-gray-100`}

	transition: var(--sidebar-transition-time);

	grid-template-rows: var(--topbar-height) 1fr var(--footer-height);
	grid-template-columns: var(--sidebar-width-open) 1fr;
	grid-template-areas:
		"sidebar topbar"
		"sidebar content"
		"sidebar footer";

	&.side-bar-closed {
		grid-template-columns: var(--sidebar-width-closed) 1fr;
	}

	#sidebar {
		grid-area: sidebar;
	}
	#topbar {
		grid-area: topbar;
	}
	#content {
		grid-area: content;
	}
	#footer {
		grid-area: footer;
	}
`
