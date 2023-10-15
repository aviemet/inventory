import React, { useEffect } from 'react'
import { MantineProvider, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useLayoutStore } from '@/lib/store'
import { usePageProps } from '@/lib/hooks'
import { DatesProvider } from '@mantine/dates'
import { themeObject } from '@/lib/theme'

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

	return (
		<MantineProvider theme={ createTheme({ ...themeObject, primaryColor }) } defaultColorScheme="auto">
			<DatesProvider settings={ { locale: 'en' } }>
				<Notifications />
				{ children }
			</DatesProvider>
		</MantineProvider>
	)
}

export default React.memo(UiFrameworkProvider)
