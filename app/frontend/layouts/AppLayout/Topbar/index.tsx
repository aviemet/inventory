import clsx from "clsx"

import { Box, AppShell, Group } from "@/components"
import { usePageProps } from "@/lib/hooks"
import { useLayoutStore } from "@/lib/store"

import ActiveCompanyDropdown from "./ActiveCompanyDropdown"
import AvatarMenu from "./AvatarMenu"
import QuickNewMenu from "./QuickNewMenu"
import * as classes from "./TopBar.css"
import ToggleSidebarButton from "../ToggleSidebarButton"
import GlobalSearchButton from "./GlobalSearchButton"

const Topbar = () => {
	const { auth: { user } } = usePageProps()
	const { sidebarOpen } = useLayoutStore()

	return (
		<AppShell.Header
			p="sm"
			className={ clsx(classes.topbar, { closed: !sidebarOpen }) }
			role="banner"
		>
			<Box className={ classes.wrapper }>

				<ToggleSidebarButton />

				<Box style={ { flex: 1 } }>
					<ActiveCompanyDropdown user={ user } />
				</Box>

				<Group>
					<GlobalSearchButton />
					<QuickNewMenu />
					<AvatarMenu />
				</Group>

			</Box>
		</AppShell.Header>
	)
}

export default Topbar
