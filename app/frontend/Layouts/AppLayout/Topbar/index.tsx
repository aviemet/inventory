import React from 'react'
import ActiveCompanyDropdown from './ActiveCompanyDropdown'
import { useLayoutStore } from '@/lib/store'
import QuickNewMenu from './QuickNewMenu'
import { Box, AppShell, Burger, Group } from '@mantine/core'
import cx from 'clsx'
import AvatarMenu from './AvatarMenu'
import { usePageProps } from '@/lib/hooks'
import * as classes from './TopBar.css'
import { theme } from '@/lib/theme'

const Topbar = () => {
	const { auth: { user } } = usePageProps()
	const { sidebarOpen, toggleSidebarOpen } = useLayoutStore()


	return (
		<AppShell.Header p="sm" className={ cx(classes.topbar, { closed: !sidebarOpen }) }>
			<Box className={ classes.wrapper }>

				<Burger
					id="BURGER"
					aria-label={ sidebarOpen ?
						'Collapse Navigation'
						:
						'Expand Navigation'
					}
					opened={ sidebarOpen }
					onClick={ () => toggleSidebarOpen() }
					size="sm"
					ml={ `${theme.other.navbar.width[sidebarOpen ? 'open' : 'closed']}px` }
					color="white"
				/>

				<Box style={ { flex: 1 } }>
					<ActiveCompanyDropdown user={ user } />
				</Box>

				<Group>
					<QuickNewMenu />
					<AvatarMenu />
				</Group>

			</Box>
		</AppShell.Header>
	)
}

export default Topbar
