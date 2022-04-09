import React from 'react'
import IconProvider from './IconProvider'
import AuthProvider, { useAuth } from './AuthProvider'
import LayoutProvider, { useLayout } from './LayoutProvider'

export {
	useAuth,
	useLayout,
}

const Providers = ({ children, auth }) => {
	return (
		<AuthProvider auth={ auth }>
			<LayoutProvider>
				<IconProvider>
					{ children }
				</IconProvider>
			</LayoutProvider>
		</AuthProvider>
	)
}

export default Providers
