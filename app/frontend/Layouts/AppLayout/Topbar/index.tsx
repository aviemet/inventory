import React from 'react'
import ActiveCompanyDropdown from './ActiveCompanyDropdown'
import { useLayout } from '@/Layouts/Providers'
import { usePage } from '@inertiajs/react'
import QuickNewMenu from './QuickNewMenu'
import { Box, Header, Burger, Group } from '@mantine/core'
import cx from 'clsx'
import AvatarMenu from './AvatarMenu'
import useTopbarStyles from './useTopbarStyles'
import { useViewportSize } from '@mantine/hooks'

const Topbar = () => {
	const { auth: { user } } = usePage<SharedInertiaProps>().props
	const { layoutState, setLayoutState } = useLayout()
	const { classes } = useTopbarStyles()

	const { width } = useViewportSize()

	return (
		<Header height={ 50 } p="sm" className={ cx(classes.topbar, { closed: !layoutState.sidebarOpen }) }>
			<Box className={ classes.wrapper }>

				<Burger
					opened={ layoutState.sidebarOpen }
					onClick={ () => setLayoutState({ sidebarOpen: !layoutState.sidebarOpen }) }
					size="sm"
					mr="xl"
				/>

				<Box sx={ { flex: 1 } }>
					<div>
						<ActiveCompanyDropdown user={ user } />
					</div>
				</Box>

				<Group>
					<div>{ width }</div>
					<QuickNewMenu />
					<AvatarMenu />
				</Group>

			</Box>
		</Header>
	)
}

export default Topbar
