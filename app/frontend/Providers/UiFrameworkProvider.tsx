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
	shadows: {
		xs: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
		sm: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
		md: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
		lg: '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
		xl: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
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
				width: '10rem',
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

						'.hidden': {
							display: 'none',
						},

						'.fullHeight': {
							display: 'flex',
							flexDirection: 'column',
							height: `calc(100vh - ${theme.other.header.height}px - ${theme.other.footer.height}px - 20px)`,
						}
					}) } />
					{ children }
				</NotificationsProvider>
			</MantineProvider>
		</ColorSchemeProvider>
	)
}

export default UiFrameworkProvider
