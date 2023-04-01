import React from 'react'
import IconProvider from './IconProvider'
import LayoutProvider, { useLayout } from './LayoutProvider'
import UiFrameworkProvider from './UiFrameworkProvider'
import SpotlightProvider from './SpotlightProvider'

import './reset.css'

export { useLayout }

interface IProviderProps {
	children?: React.ReactNode
}

const Providers = React.memo(({ children }: IProviderProps) => {
	return (
		<LayoutProvider>
			<UiFrameworkProvider>
				<SpotlightProvider>
					<IconProvider>
						{ children }
					</IconProvider>
				</SpotlightProvider>
			</UiFrameworkProvider>
		</LayoutProvider>
	)
})

export default Providers
