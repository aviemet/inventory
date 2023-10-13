import React, { useEffect } from 'react'
import { AppShell, Box, px, useMantineTheme } from '@mantine/core'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from '../Footer'
import * as classes from './AppLayout.css'
import { useLayoutStore } from '@/lib/store'

const AppLayout = ({ children }: { children: any }) => {
	const theme = useMantineTheme()
	const { sidebarOpen } = useLayoutStore()

	useEffect(() => {
		if(process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
			console.log({ theme })
			console.log({ breakpointsPx: Object.fromEntries(
				Object.entries(theme.breakpoints).map(([key, val]) => [key, px(val)]),
			) })
		}
	}, [])

	return (
		<AppShell
			header={ { height: theme.other.header.height } }

			navbar={ {
				width: { sm: sidebarOpen ? theme.other.navbar.width.open : theme.other.navbar.width.closed },
				breakpoint: 'md',
			} }

			footer={ { height: theme.other.footer.height } }
		>
			<Topbar />
			<Sidebar />
			<Footer />
			<AppShell.Main>
				<Box id="CONTENT_WRAPPER" className={ classes.wrapper } p="xs">
					{ children }
				</Box>
			</AppShell.Main>
		</AppShell>
	)
}

export default React.memo(AppLayout)
