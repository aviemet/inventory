import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from '../Footer'
import classnames from 'classnames'
import { useLayout, useAuth } from '@/Providers'

const AppLayout = ({ children }) => {
	const { layoutState } = useLayout()
	const { user } = useAuth()

	console.log({ user })

	return (
		<>
			<Head title="Inventory" />
			<div id="grid-layout" className={ classnames({ 'side-bar-closed': !layoutState.sidebarOpen }) }>
				<Sidebar />
				<Topbar />
				<main id="content-wrapper">
					{ children 	}
				</main>
				<Footer />
			</div>
		</>
	)
}

export default AppLayout
