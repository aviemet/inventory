import React from 'react'
import ActiveCompanyDropdown from './ActiveCompanyDropdown'
import { useLayout } from '@/Providers'
import { usePage } from '@inertiajs/inertia-react'
import QuickNewMenu from './QuickNewMenu'
import { Box, Header, Burger, useMantineTheme } from '@mantine/core'
import { ToggleColorSchemeButton } from '@/Components/Button'
import cx from 'clsx'

const Topbar = () => {
	const { props: { auth: { user } } } = usePage<InertiaPage>()
	const { layoutState, setLayoutState } = useLayout()
	const theme = useMantineTheme()

	return (
		<Header height={ 50 } p="sm" className={ cx({ closed: !layoutState.sidebarOpen }) } sx={ theme => ({
			transition: 'left 100ms ease-in-out',
			backgroundColor: theme.other.colorSchemeOption(
				theme.colors[theme.primaryColor][9],
				theme.fn.darken(theme.colors[theme.primaryColor][9], 0.75)
			),
			color: theme.white,

			[`@media (min-width: ${theme.breakpoints.md}px)`]: {
				left: theme.other.navbar.width.open,

				'&.closed': {
					left: theme.other.navbar.width.closed
				}
			},
		}) }>
			<Box sx={ { display: 'flex', alignItems: 'center', height: '100%' } }>

				<Burger
					opened={ layoutState.sidebarOpen }
					onClick={ () => setLayoutState({ sidebarOpen: !layoutState.sidebarOpen }) }
					size="sm"
					color={ theme.colors.gray[6] }
					mr="xl"
				/>

				<Box sx={ { flex: 1 } }>
					<ActiveCompanyDropdown user={ user } />
				</Box>

				<div>
					<ToggleColorSchemeButton />
					<QuickNewMenu />
				</div>

			</Box>
		</Header>
	)
}

export default Topbar
