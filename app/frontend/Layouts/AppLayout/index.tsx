import React, { useEffect } from 'react'
import { Box, px, useMantineTheme } from '@mantine/core'
import { AppShell } from '@/Components'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from '../Footer'
import * as classes from './AppLayout.css'
import { useLayoutStore } from '@/lib/store'
import { useDisclosure } from '@mantine/hooks'

const AppLayout = ({ children }: { children: any }) => {
	const theme = useMantineTheme()
	const { sidebarOpen } = useLayoutStore()
	const [mobileOpen, mobileHandlers] = useDisclosure(sidebarOpen)
	const [desktopOpen] = useDisclosure(sidebarOpen)
	console.log({ desktopOpen, mobileOpen })
	useEffect(() => {
		if(process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
			console.log({ theme })
			console.log({ breakpointsPx: Object.fromEntries(
				Object.entries(theme.breakpoints).map(([key, val]) => [key, px(val)]),
			) })
		}
	}, [])

	useEffect(() => {
		if(sidebarOpen) {
			mobileHandlers.open()
		} else if(!sidebarOpen) {
			mobileHandlers.close()
		}
	}, [sidebarOpen])

	return (
		<AppShell
			header={ { height: theme.other.header.height } }

			navbar={ {
				width: { sm: sidebarOpen ? theme.other.navbar.width.open : theme.other.navbar.width.closed },
				collapsed: {
					mobile: !mobileOpen,
				},
				breakpoint: 'sm',
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
