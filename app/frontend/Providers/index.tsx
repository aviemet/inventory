import React from 'react'
import IconProvider from './IconProvider'
import LayoutProvider, { useLayout } from './LayoutProvider'
import UiFrameworkProvider from './UiFrameworkProvider'
import { Global } from '@mantine/core'

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

			<Global styles={ theme => ({
				'html, body': {
					overflow: 'hidden',
				},
				'*::selection': {
					backgroundColor: theme.colors[theme.primaryColor][2],
				},
			}) } />

			<LayoutProvider>
				<IconProvider>
					{ children }
				</IconProvider>
			</LayoutProvider>
		</UiFrameworkProvider>
	)
})

export default Providers
