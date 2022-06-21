import React from 'react'
import IconProvider from './IconProvider'
import LayoutProvider, { useLayout } from './LayoutProvider'
import UiFrameworkProvider from './UiFrameworkProvider'

import './reset.css'

export {
	useLayout,
}

interface IProviderProps {
	children?: React.ReactNode
}

const Providers = React.memo(({ children }: IProviderProps) => {
	return (
		<UiFrameworkProvider>
			<LayoutProvider>
				<IconProvider>
					{ children }
				</IconProvider>
			</LayoutProvider>
		</UiFrameworkProvider>
	)
})

export default Providers
