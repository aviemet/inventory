import React from 'react'
import IconProvider from './IconProvider'
import AuthProvider, { useAuth } from './AuthProvider'
import LayoutProvider, { useLayout } from './LayoutProvider'

export {
	useAuth,
	useLayout,
}

interface IProviderProps {
	children?: React.ReactNode
	auth: any
}

const Providers = React.memo(({ children, auth }: IProviderProps) => {
	return (
		<AuthProvider auth={ auth }>
			<LayoutProvider>
				<IconProvider>
					{ children }
				</IconProvider>
			</LayoutProvider>
		</AuthProvider>
	)
})

export default Providers
