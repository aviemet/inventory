import React, { useEffect } from 'react'
import { MantineProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { usePage } from '@inertiajs/inertia-react'

const useTheme = (colorScheme: 'light'|'dark') => ({
	colorScheme,
	fontFamily: 'Roboto, sans-serif',
	fontFamilyMonospace: 'Monaco, Courier, monospace',
	primaryColor: 'violet',
	defaultRadius: 'xs',
	other: {
		header: {
			height: 50,
		},
		navbar: {
			width: {
				closed: 50,
				open: 215,
			},
		},
		footer: {
			height: 35,
		},
		form: {
			label: {
				width: '12rem',
			},
		},
		table: {
			sortButtonHeight: 5,
			sortButtonWidth: 6,
		},
	},
})

const UiFrameworkProvider = ({ children }: { children: React.ReactNode }) => {
	const { props: { auth: { user } } } = usePage<InertiaPage>()
	const [colorScheme, setColorScheme] = useLocalStorage<'dark'|'light'>({ key: 'colorScheme', defaultValue: 'light' })

	useEffect(() => {
		if(colorScheme !== user?.user_preferences?.colorScheme) {
			setColorScheme(user?.user_preferences?.colorScheme)
		}
	}, [user?.user_preferences?.colorScheme])

	return (
		<MantineProvider theme={ useTheme(colorScheme) } withGlobalStyles withNormalizeCSS>
			{ children }
		</MantineProvider>
	)
}

export default UiFrameworkProvider
