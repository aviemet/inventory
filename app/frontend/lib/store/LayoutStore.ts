import { create } from 'zustand'
import { defaultColor } from '../theme'


interface ILayoutState {
	sidebarOpen: boolean
	primaryColor: string
	toggleSidebarOpen: (sidebarOpen?: boolean) => void
	setPrimaryColor: (color: string) => void
}

const useLayoutStore = create<ILayoutState>()((set) => ({
	sidebarOpen: false,
	primaryColor: defaultColor,

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
