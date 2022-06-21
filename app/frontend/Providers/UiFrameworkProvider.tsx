import React from 'react'
import { ColorScheme, ColorSchemeProvider, Global, MantineProvider } from '@mantine/core'
import { useColorScheme, useLocalStorage } from '@mantine/hooks'
import { NotificationsProvider } from '@mantine/notifications'
import { usePage } from '@inertiajs/inertia-react'
import axios from 'axios'
import { Routes } from '@/lib'

const useTheme = (colorScheme: 'light'|'dark') => ({
	colorScheme,
	fontFamily: 'Roboto, sans-serif',
	fontFamilyMonospace: 'Monaco, Courier, monospace',
	primaryColor: 'violet',
	primaryShade: {
		light: 8,
		dark: 6,
	},
	defaultRadius: 'xs',
	transitionTimingFunction: 'ease-in-out',
	headings: {
		fontFamily: 'Greycliff CF, Roboto, sans-serif',
	},
	other: {
		colorSchemeOption: (light: any, dark: any) => colorScheme === 'dark' ? dark : light,
		header: {
			height: 50,
		},
		navbar: {
			width: {
				closed: 50,
				open: 200,
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
	const systemColorScheme = useColorScheme()
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: 'colorScheme',
		defaultValue: user?.user_preferences?.colorScheme || systemColorScheme
	})

	const toggleColorScheme = (value?: ColorScheme) => {
		const scheme = value || (colorScheme === 'dark' ? 'light' : 'dark')

		if(user) {
			axios.patch(Routes.updateUserPreferences(user), {
				user: {
					user_preferences: {
						colorScheme: scheme
					}
				}
			})
		}

		setColorScheme(scheme)
	}

	return (
		<ColorSchemeProvider colorScheme={ colorScheme } toggleColorScheme={ toggleColorScheme }>
			<MantineProvider theme={ useTheme(colorScheme) } withGlobalStyles withNormalizeCSS>
				<NotificationsProvider>

					<Global styles={ theme => ({
						'html, body': {
							overflow: 'hidden',
						},
						'*::selection': {
							backgroundColor: theme.colors[theme.primaryColor][2],
						},
						':root': {
							colorScheme: theme.colorScheme,
						},
					}) } />
					{ children }
				</NotificationsProvider>
			</MantineProvider>
		</ColorSchemeProvider>
	)
}

export default UiFrameworkProvider
