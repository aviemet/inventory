import React, { useCallback, useReducer } from 'react'
import { createContext } from '@/Components/Hooks'
import { usePage } from '@inertiajs/react'

interface ILayoutSettings {
	sidebarOpen: boolean
	primaryColor: string
}
interface ILayoutContext {
	layoutState: ILayoutSettings
	setLayoutState: Function
}

const [useLayout, LayoutContextProvider] = createContext<ILayoutContext>()
export { useLayout }

const layoutReducer = (layoutState: ILayoutSettings, newlayoutState: Partial<ILayoutSettings>) => ({
	...layoutState,
	...newlayoutState,
})

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
	const page = usePage<SharedInertiaProps>().props

	const getCompanyColor = useCallback(() => {
		let activeCompanyId = page.auth?.user?.active_company_id

		if(activeCompanyId === undefined) return

		const company = page.auth.user?.companies?.find(company => company.id === activeCompanyId)
		return company?.settings?.primary_color
	}, [page.auth?.user?.active_company_id])

	const [layoutState, setLayoutState] = useReducer(layoutReducer, {
		sidebarOpen: false,
		primaryColor: getCompanyColor() || 'violet',
	})

	return (
		<LayoutContextProvider value={ { layoutState, setLayoutState } }>
			{ children }
		</LayoutContextProvider>
	)
}

export default LayoutProvider
