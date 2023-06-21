import React from 'react'
import ActiveCompanyDropdown from './ActiveCompanyDropdown'
import { useLayoutStore } from '@/Layouts/Providers'
import QuickNewMenu from './QuickNewMenu'
import { Box, Header, Burger, Group } from '@mantine/core'
import cx from 'clsx'
import AvatarMenu from './AvatarMenu'
import useTopbarStyles from './useTopbarStyles'
import { usePageProps } from '@/lib/hooks'

const Topbar = () => {
	const { auth: { user } } = usePageProps()
	const { sidebarOpen, toggleSidebarOpen } = useLayoutStore()
	const { classes } = useTopbarStyles()


	return (
		<Header height={ 50 } p="sm" className={ cx(classes.topbar, { closed: !sidebarOpen }) }>
			<Box className={ classes.wrapper }>

				<Burger
					opened={ sidebarOpen }
					onClick={ () => toggleSidebarOpen() }
					size="sm"
					mr="xl"
				/>

				<Box sx={ { flex: 1 } }>
					<div>
						<ActiveCompanyDropdown user={ user } />
					</div>
				</Box>

				<Group>
					<QuickNewMenu />
					<AvatarMenu />
				</Group>

			</Box>
		</Header>
	)
}

export default Topbar
