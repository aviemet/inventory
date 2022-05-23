import React from 'react'
import { useLayout } from '@/Providers'
import { Flash } from '@/Components/Flash'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from '../Footer'
import cn from 'classnames'
import tw, { styled } from 'twin.macro'

import './appLayout.css'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	const { layoutState } = useLayout()
	return (
		<div
			id="grid-layout"
			className={ cn({ 'side-bar-closed': !layoutState.sidebarOpen }) }
		>
			<Flash />
			<Sidebar />
			<Topbar />
			<main id="content-wrapper" scroll-region="true">
				{ children 	}
			</main>
			<Footer />
		</div>
	)
}

export default AppLayout

const AppWrapper = styled.div`
	${ tw`dark:bg-gray-700 grid h-screen gap-0 bg-gray-100`}

	transition: var(--sidebar-transition-time);

	grid-template-rows: var(--topbar-height) 1fr var(--footer-height);

  /* Mobile Grid Definition */
  grid-template-columns: 1fr;
  grid-template-areas:
    "topbar"
    "content"
    "footer";

  /* Desktop Grid Definition */
  @screen sm {
		grid-template-columns: var(--sidebar-width-open) 1fr;
		grid-template-areas:
			"sidebar topbar"
			"sidebar content"
			"sidebar footer";
	}

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
