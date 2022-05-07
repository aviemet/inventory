import React from 'react'
import IconProvider from './IconProvider'
import LayoutProvider, { useLayout } from './LayoutProvider'

export {
	useLayout,
}

interface IProviderProps {
	children?: React.ReactNode
}

const Providers = React.memo(({ children }: IProviderProps) => {
	return (
		<LayoutProvider>
			<IconProvider>
				{ children }
			</IconProvider>
		</LayoutProvider>
	)
})

export default Providers
