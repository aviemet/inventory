import React, { useReducer } from 'react'
import { Head } from '@inertiajs/inertia-react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from '../Footer'
import { createContext } from '@/Components/Hooks'
import classnames from 'classnames'

interface ILayoutSettings {
	sidebarOpen: boolean
}
interface ILayoutContext {
	state: ILayoutSettings
	setState: Function
}

const [useLayout, LayoutProvider] = createContext<ILayoutContext>()
export { useLayout }

const AppLayout = ({ children }) => {
	const layoutReducer = (state: ILayoutSettings, newState: Partial<ILayoutSettings>) => ({
		...state,
		...newState,
	})

	const [state, setState] = useReducer(layoutReducer, {
		sidebarOpen: false,
	})

	return (
		<LayoutProvider value={ { state, setState } }>
			<Head title="Inventory" />
			<div id="grid-layout" className={ classnames({ 'side-bar-closed': !state.sidebarOpen }) }>
				<Sidebar />
				<Topbar />
				<main id="content-wrapper">
					{ children 	}
				</main>
				<Footer />
			</div>
		</LayoutProvider>
	)
}

export default AppLayout
