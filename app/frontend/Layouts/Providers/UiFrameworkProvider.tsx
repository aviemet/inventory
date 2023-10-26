import React, { useEffect, useMemo } from 'react'
import { MantineProvider, createTheme, px, type CSSVariablesResolver } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useLayoutStore } from '@/lib/store'
import { usePageProps } from '@/lib/hooks'
import { DatesProvider } from '@mantine/dates'
import { themeObject, vars } from '@/lib/theme'
import { themeToVars } from '@mantine/vanilla-extract'

const UiFrameworkProvider = ({ children }: { children: React.ReactNode }) => {
	const { auth } = usePageProps()

	/**
	 * Primary color customization
	 */
	const { primaryColor, setPrimaryColor } = useLayoutStore()

	useEffect(() => {
		const companyColor = auth?.user?.active_company?.settings?.primary_color || 'violet'
		if(companyColor === primaryColor) return

		setPrimaryColor(companyColor)
	}, [auth?.user?.active_company?.settings?.primary_color])

	const theme = useMemo(() => createTheme({ ...themeObject, primaryColor }), [primaryColor])

	const cssVariablesResolver = useMemo(() => {
		const testTheme = createTheme({ ...themeObject, primaryColor })
		// const newVars = {}
		// for(const [key, value] of Object.entries(theme.colors.primaryColor)) {
		// 	newVars[`--mantine-color-primaryColor-${key}`] = value
		// }

		const resolver: CSSVariablesResolver = (resolverTheme) => {
			const colors = resolverTheme.colors[primaryColor]
			console.log({ newVars: themeToVars(createTheme({ colors: { primaryColor: colors } })) })
			return {
				variables: {
					colors: {
						primaryColor: resolverTheme.colors[primaryColor],
					},
				},
				dark: {},
				light: {},
			}
		}

		console.log({ testTheme })

		return resolver
	}, [primaryColor])

	useEffect(() => {
		/* eslint-disable no-console */
		if(process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
			console.log({ theme })
			console.log({ vars })

			console.log({ breakpointsPx: Object.fromEntries(
				Object.entries(theme.breakpoints ?? []).map(([key, val]) => [key, px(val)]),
			) })
		}
		/* eslint-enable */
	}, [])

	return (
		<MantineProvider
			theme={ theme }
			defaultColorScheme="auto"
			cssVariablesResolver={ cssVariablesResolver }
		>
			<DatesProvider settings={ { locale: 'en' } }>
				<Notifications />
				{ children }
			</DatesProvider>
		</MantineProvider>
	)
}

export default React.memo(UiFrameworkProvider)
