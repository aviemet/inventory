import React, { useEffect } from 'react'
import { AppShell, Box, useMantineTheme } from '@mantine/core'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from '../Footer'
import useAppLayoutStyles from './useAppLayoutStyles'

const AppLayout = ({ children }: { children: any }) => {
	const { classes } = useAppLayoutStyles()
	const theme = useMantineTheme()

	useEffect(() => {
		if(process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
			console.log({ theme })
		}
	}, [])

	return (
		<AppShell
			fixed
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			padding="xs"

			sx={ theme => ({
				main: {
					background: theme.other.colorSchemeOption(theme.colors.gray[1], theme.black),
					height: `calc(100vh - ${theme.other.header.height}px - ${theme.other.footer.height}px)`,
					paddingTop: 'var(--mantine-header-height, 0px)',
					paddingBottom: 'var(--mantine-footer-height, 0px)',
					paddingLeft: 'var(--mantine-navbar-width, 0px)',
					paddingRight: 'var(--mantine-aside-width, 0px)',
				},
			}) }

			header={ <Topbar /> }

			navbar={ <Sidebar /> }

			footer={ <Footer /> }
		>
			<Box p={ 10 } id="CONTENT_WRAPPER" className={ classes.wrapper }>
				{ children }
			</Box>
		</AppShell>
	)
}

export default AppLayout
