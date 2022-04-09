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
	layoutState: ILayoutSettings
	setLayoutState: Function
}

const [useLayout, LayoutProvider] = createContext<ILayoutContext>()
export { useLayout }

const AppLayout = ({ children }) => {
	const layoutReducer = (layoutState: ILayoutSettings, newlayoutState: Partial<ILayoutSettings>) => ({
		...layoutState,
		...newlayoutState,
	})

	const [layoutState, setLayoutState] = useReducer(layoutReducer, {
		sidebarOpen: false,
	})

	return (
		<LayoutProvider value={ { layoutState, setLayoutState } }>
			<Head title="Inventory" />
			<div id="grid-layout" className={ classnames({ 'side-bar-closed': !layoutState.sidebarOpen }) }>
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
