import React from 'react'
import ActiveCompanyDropdown from './ActiveCompanyDropdown'
import { useLayoutStore } from '@/lib/store'
import QuickNewMenu from './QuickNewMenu'
import { Box, AppShell, Burger, Group } from '@mantine/core'
import cx from 'clsx'
import AvatarMenu from './AvatarMenu'
import { usePageProps } from '@/lib/hooks'
import * as classes from './TopBar.css'

const Topbar = () => {
	const { auth: { user } } = usePageProps()
	const { sidebarOpen, toggleSidebarOpen } = useLayoutStore()


	return (
		<AppShell.Header height={ 50 } p="sm" className={ cx(classes.topbar, { closed: !sidebarOpen }) }>
			<Box className={ classes.wrapper }>

				<Burger
					opened={ sidebarOpen }
					onClick={ () => toggleSidebarOpen() }
					size="sm"
					mr="xl"
				/>

				<Box style={ { flex: 1 } }>
					<div>
						<ActiveCompanyDropdown user={ user } />
					</div>
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
