import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from '../Footer'

const AppLayout = ({ children }) => {

	return (
		<>
			<Head title="Inventory" />
			<div id="grid-layout" className="side-bar-closed">
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
