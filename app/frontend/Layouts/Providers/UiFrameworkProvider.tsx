import React, { useEffect, useMemo } from 'react'
import { MantineProvider, createTheme, px, type CSSVariablesResolver } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useLayoutStore } from '@/lib/store'
import { usePageProps } from '@/lib/hooks'
import { DatesProvider } from '@mantine/dates'
import { theme as themeObject, vars } from '@/lib/theme'
import { type CSSVariables } from '@mantine/core/lib/core/MantineProvider/convert-css-variables/css-variables-object-to-string'

const UiFrameworkProvider = ({ children }: { children: React.ReactNode }) => {
	const { auth } = usePageProps()

	/**
	 * Primary color customization
	 */
	const { primaryColor, setPrimaryColor } = useLayoutStore()

	useEffect(() => {
		const companyColor = auth?.user?.active_company?.settings?.primary_color || primaryColor
		if(companyColor === primaryColor) return

		setPrimaryColor(companyColor)
	}, [auth?.user?.active_company?.settings?.primary_color])

	const theme = useMemo(() => createTheme({ ...themeObject, primaryColor }), [primaryColor])

	const cssVariablesResolver = useMemo((): CSSVariablesResolver => {
		return (resolverTheme) => {
			const variables: CSSVariables = {}
			for(let i = 0; i <= 9; i++) {
				variables[`--mantine-color-primaryColor-${i}`] = resolverTheme.colors[primaryColor][i]
			}
			// ['filled', 'filled-hover', 'light', 'light-hover', 'light-color', 'outline', 'outline-hover'].forEach(key => {
			// 	variables[`--mantine-color-primaryColor-${key}`] = resolverTheme.colors[primaryColor][ ??? ]
			// })

			return {
				variables,
				dark: {},
				light: {},
			}
		}
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
