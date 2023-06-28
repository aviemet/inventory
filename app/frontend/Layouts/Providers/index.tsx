import React from 'react'
import IconProvider from './IconProvider'
import UiFrameworkProvider from './UiFrameworkProvider'
import SpotlightProvider from './SpotlightProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './reset.css'
import useLayoutStore from '../AppLayout/store/LayoutStore'

export { useLayoutStore }

interface IProviderProps {
	children?: React.ReactNode
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 30000,
			cacheTime: 30000,
		},
	},
})

const Providers = React.memo(({ children }: IProviderProps) => {
	return (
		<QueryClientProvider client={ queryClient }>
			<UiFrameworkProvider>
				<SpotlightProvider>
					<IconProvider>
						{ children }
					</IconProvider>
				</SpotlightProvider>
			</UiFrameworkProvider>
		</QueryClientProvider>
	)
})

export default Providers
