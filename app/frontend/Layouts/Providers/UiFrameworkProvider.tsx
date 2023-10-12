import React, { useEffect } from 'react'
import { MantineProvider, useComputedColorScheme, useMantineColorScheme } from '@mantine/core'
import { useColorScheme, useLocalStorage } from '@mantine/hooks'
import { Notifications } from '@mantine/notifications'
import useLayoutStore from '../AppLayout/store/LayoutStore'
import { usePageProps } from '@/lib/hooks'
import { DatesProvider } from '@mantine/dates'
import { useUpdateUserPreferences } from '@/queries/users'
import { theme } from '@/lib/theme'

// type ColorScheme = 'light'|'dark'|'auto'

// export const useTheme = (primaryColor = 'violet') => ({
// 	breakpoints: {
// 		'hd': '120rem', // 1920px,
// 		'2xl': '110rem', // 1760px,
// 		xl: '90rem', // 1440px, default 88rem
// 		lg: '80rem', // 1280px, default 75rem
// 		md: '62rem',
// 		sm: '48rem',
// 		xs: '36rem',
// 		'2xs': '30rem', // 480px
// 	},
// 	black: '#111111',
// 	white: '#FCFCFC',
// 	fontFamily: 'Roboto, sans-serif',
// 	fontFamilyMonospace: 'Monaco, Courier, monospace',
// 	primaryColor: primaryColor,
// 	defaultRadius: 'xs',
// 	transitionTimingFunction: 'ease-in-out',
// 	headings: {
// 		fontFamily: 'Greycliff CF, Roboto, sans-serif',
// 	},
// 	fontSizes: {
// 		xs: '0.75rem',
// 		sm: '0.9rem',
// 		md: '1rem',
// 		lg: '1.2rem',
// 		xl: '1.4rem',
// 	},
// 	shadows: {
// 		xs: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
// 		sm: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
// 		md: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
// 		lg: '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
// 		xl: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
// 	},
// 	components: {
// 		Autocomplete: {
// 			styles: {
// 				input: {
// 					height: 'unset',
// 				},
// 			},
// 		},
// 	},
// 	other: {
// 		header: {
// 			height: 50,
// 		},
// 		navbar: {
// 			width: {
// 				closed: 50,
// 				open: 200,
// 			},
// 		},
// 		footer: {
// 			height: 35,
// 		},
// 		form: {
// 			label: {
// 				width: '12rem',
// 			},
// 		},
// 		table: {
// 			sortButtonHeight: 5,
// 			sortButtonWidth: 6,
// 		},
// 		colors: {
// 			replenishButtonColor: 'yellow',
// 			checkoutButtonColor: 'pink',
// 			checkinButtonColor: 'cyan',
// 		},
// 	},
// })

const UiFrameworkProvider = ({ children }: { children: React.ReactNode }) => {
	const { auth } = usePageProps()

	// const userPreferencesMutation = useUpdateUserPreferences()

	/**
	 * Primary color customization
	 */
	const { primaryColor, setPrimaryColor } = useLayoutStore()

	useEffect(() => {
		const companyColor = auth?.user?.active_company?.settings?.primary_color || 'violet'
		if(companyColor === primaryColor) return

		setPrimaryColor(companyColor)
	}, [auth?.user?.active_company?.settings?.primary_color, primaryColor, setPrimaryColor])


	/**
	 * Light/Dark theme toggles
	 */
	// const systemColorScheme = useColorScheme()
	// const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
	// 	key: 'colorScheme',
	// 	defaultValue: auth?.user?.user_preferences?.colorScheme || systemColorScheme,
	// 	getInitialValueInEffect: false,
	// })

	// const toggleColorScheme = (value?: ColorScheme) => {
	// 	const scheme = value || (colorScheme === 'dark' ? 'light' : 'dark')

	// 	if(auth?.user?.id) {
	// 		userPreferencesMutation.mutate({
	// 			id: auth.user.id,
	// 			data: {
	// 				colorScheme: scheme,
	// 			},
	// 		})
	// 	}

	// 	setColorScheme(scheme)
	// }

	// const mantineTheme = useTheme(primaryColor)

	return (
		<MantineProvider theme={ theme } defaultColorScheme="auto">
			<DatesProvider settings={ { locale: 'en' } }>
				<Notifications />
				{ /* <GlobalStyles /> */ }
				{ children }
			</DatesProvider>
		</MantineProvider>
	)
}

export default React.memo(UiFrameworkProvider)
