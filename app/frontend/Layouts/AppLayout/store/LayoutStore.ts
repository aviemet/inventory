import { create } from 'zustand'

interface ILayoutState {
	sidebarOpen: boolean
	primaryColor: string|undefined
	toggleSidebarOpen: (sidebarOpen?: boolean) => void
	setPrimaryColor: (color: string) => void
}

const useLayoutStore = create<ILayoutState>()((set) => ({
	sidebarOpen: false,
	primaryColor: undefined,

	toggleSidebarOpen: sidebarOpen => set(state => {
		let setValue = sidebarOpen
		if(sidebarOpen === undefined) {
			setValue = !state.sidebarOpen
		}
		return { sidebarOpen: setValue }
	}),

	setPrimaryColor: color => set(state => ({
		primaryColor: color,
	})),
}))

export default useLayoutStore
