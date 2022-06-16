import React from 'react'
import { MantineProvider } from '@mantine/core'
import theme from './theme'

const UiFrameworkProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<MantineProvider theme={ theme } withGlobalStyles withNormalizeCSS>
			{ children }
		</MantineProvider>
	)
}

export default UiFrameworkProvider
