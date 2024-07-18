import React from 'react'
import { Burger } from '@/Components'
import { useLayoutStore } from '@/lib/store'

const ToggleSidebarButton = () => {
	const { sidebarOpen, toggleSidebarOpen } = useLayoutStore()

	return (
		<Burger
			aria-label={ sidebarOpen ?
				'Collapse Navigation'
				:
				'Expand Navigation'
			}
			opened={ sidebarOpen }
			onClick={ () => toggleSidebarOpen() }
			size="sm"
			color="white"
		/>
	)
}

export default ToggleSidebarButton
