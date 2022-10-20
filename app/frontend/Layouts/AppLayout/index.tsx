import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from '../Footer'
import { AppShell, Box, TypographyStylesProvider, useMantineTheme } from '@mantine/core'

const AppLayout = ({ children }: { children: any }) => {
	const theme = useMantineTheme()
	if(process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
		console.log({ theme })
	}

	return (
		<AppShell
			fixed
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			padding="xs"

			sx={ theme => ({
				header: {

				},

				main: {
					background: theme.other.colorSchemeOption(theme.colors.gray[1], theme.black),
					height: `calc(100vh - ${theme.other.header.height}px - ${theme.other.footer.height}px)`,
					paddingTop: 'var(--mantine-header-height, 0px)',
					paddingBottom: 'var(--mantine-footer-height, 0px)',
					paddingLeft: 'var(--mantine-navbar-width, 0px)',
					paddingRight: 'var(--mantine-aside-width, 0px)',
				}
			}) }

			header={ <Topbar /> }

			navbar={ <Sidebar /> }

			footer={ <Footer /> }
		>
			<Box p={ 10 } id="CONTENT_WRAPPER" sx={ theme => ({
				overflow: 'auto',
				height: `calc(100vh - ${theme.other.header.height}px - ${theme.other.footer.height}px)`,
			}) }>
				<TypographyStylesProvider sx={ { 'h1, h2, h3, h4, h5, h6': { 'marginTop': 0 } } }>
					{ children }
				</TypographyStylesProvider>
			</Box>
		</AppShell>
	)
}

export default AppLayout
