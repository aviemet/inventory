import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from '../Footer'
import classnames from 'classnames'
import { useLayout } from '@/Providers'

const AppLayout = ({ children }) => {
	const { layoutState } = useLayout()

	return (
		<>
			<Head title="Inventory" />
			<div id="grid-layout" className={ classnames({ 'side-bar-closed': !layoutState.sidebarOpen }) }>
				<Sidebar />
				<Topbar />
				<main id="content-wrapper" scroll-region="true">
					{ children 	}
				</main>
				<Footer />
			</div>
		</>
	)
}

export default AppLayout
