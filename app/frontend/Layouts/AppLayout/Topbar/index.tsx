import React from 'react'
import ActiveCompanyDropdown from './ActiveCompanyDropdown'
import { useLayout } from '@/Providers'
import { usePage } from '@inertiajs/inertia-react'
import QuickNewMenu from './QuickNewMenu'
import { Box, Header, Burger, useMantineTheme } from '@mantine/core'

const Topbar = () => {
	const { props: { auth: { user } } } = usePage<InertiaPage>()
	const { layoutState, setLayoutState } = useLayout()
	const theme = useMantineTheme()

	return (
		<Header height={ 50 } p="sm">
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
					<QuickNewMenu />
				</div>

			</Box>
		</Header>
	)
}

export default Topbar
