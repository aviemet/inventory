import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from '../Footer'
import {
	AppShell,
	useMantineTheme,
} from '@mantine/core'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
	const theme = useMantineTheme()
	console.log({ theme })
	return (
		<AppShell
			fixed
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			padding="xs"

			sx={ {
				main: {
					background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
					height: `calc(100vh - ${theme.other.header.height}px - ${theme.other.footer.height}px)`,
					overflow: 'scroll'
				}
			} }

			header={ <Topbar /> }

			navbar={ <Sidebar /> }

			footer={ <Footer /> }
		>
			{ children }
		</AppShell>
	)
}

export default AppLayout
