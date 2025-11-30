import { Box, useMantineTheme } from "@mantine/core"
import clsx from "clsx"
import React, { useEffect } from "react"

import { AppShell } from "@/components"
import { useDisclosure } from "@/lib/hooks"
import { useLayoutStore } from "@/lib/store"

import { LayoutProps } from ".."
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import Footer from "../Footer"
import * as classes from "./AppLayout.css"
import "@mantine/tiptap/styles.css"

const AppLayout = ({ children }: LayoutProps) => {
	const theme = useMantineTheme()
	const { sidebarOpen } = useLayoutStore()
	const [mobileOpen, mobileHandlers] = useDisclosure(sidebarOpen)
	// const [desktopOpen] = useDisclosure(sidebarOpen)

	useEffect(() => {
		if(sidebarOpen) {
			mobileHandlers.open()
		} else if(!sidebarOpen) {
			mobileHandlers.close()
		}
	}, [mobileHandlers, sidebarOpen])

	return (
		<AppShell
			header={ { height: theme.other.header.height } }

			navbar={ {
				width: { sm: sidebarOpen ? theme.other.navbar.width.open : theme.other.navbar.width.closed },
				collapsed: {
					mobile: !mobileOpen,
				},
				breakpoint: "sm",
			} }

			footer={ { height: theme.other.footer.height } }
		>
			<Topbar />
			<Sidebar />
			<Footer />
			<AppShell.Main role="main">
				<Box className={ clsx(classes.wrapper) } p="xs">
					{ children }
				</Box>
			</AppShell.Main>
		</AppShell>
	)
}

export default AppLayout
