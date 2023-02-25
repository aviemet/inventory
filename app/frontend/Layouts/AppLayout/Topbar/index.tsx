import React from 'react'
import ActiveCompanyDropdown from './ActiveCompanyDropdown'
import { useLayout } from '@/Layouts/Providers'
import { usePage } from '@inertiajs/react'
import QuickNewMenu from './QuickNewMenu'
import { Box, Header, Burger, Group } from '@mantine/core'
import cx from 'clsx'
import AvatarMenu from './AvatarMenu'

const Topbar = () => {
	const { props: { auth: { user } } } = usePage<SharedInertiaProps>()
	const { layoutState, setLayoutState } = useLayout()

	return (
		<Header height={ 50 } p="sm" className={ cx({ closed: !layoutState.sidebarOpen }) } sx={ theme => ({
			transition: 'left 100ms ease-in-out',
			backgroundColor: theme.other.colorSchemeOption(
				theme.colors[theme.primaryColor][9],
				theme.fn.darken(theme.colors[theme.primaryColor][9], 0.75),
			),
			color: theme.white,

			[`@media (min-width: ${theme.breakpoints.sm}px)`]: {
				left: theme.other.navbar.width.open,

				'&.closed': {
					left: theme.other.navbar.width.closed,
				},
			},
		}) }>
			<Box sx={ { display: 'flex', alignItems: 'center', height: '100%' } }>

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
					<QuickNewMenu />
					<AvatarMenu />
				</Group>

			</Box>
		</Header>
	)
}

export default Topbar
