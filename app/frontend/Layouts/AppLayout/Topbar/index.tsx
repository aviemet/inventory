import React from 'react'
import { MenuBarsIcon } from '@/Components/Icons'
import ActiveCompanyDropdown from './ActiveCompanyDropdown'
import tw, { styled } from 'twin.macro'
import { IconContext } from 'react-icons'
import { useLayout } from '@/Providers'
import { usePage } from '@inertiajs/inertia-react'
import QuickNewMenu from './QuickNewMenu'

const Topbar = () => {
	const { props: { auth: { user } } } = usePage<InertiaPage>()
	const { layoutState, setLayoutState } = useLayout()

	return (
		<IconContext.Provider value={ { size: '24px', className: 'react-icon' } }>
			<TopbarHeader id="topbar"  tw="flex items-center">
				<div
					tw="sm:hidden cursor-pointer ml-1 mr-2"
					onClick={ () => setLayoutState({ sidebarOpen: !layoutState.sidebarOpen }) }
				>
					<MenuBarsIcon />
				</div>

				<div tw="flex-1">
					<ActiveCompanyDropdown user={ user } />
				</div>

				<div>
					<QuickNewMenu />
				</div>
			</TopbarHeader>
		</IconContext.Provider>
	)
}

export default Topbar

const TopbarHeader = styled.header`
	margin-bottom: 1px;

	${tw`dark:bg-gray-600 px-2 py-1 bg-white shadow`}
`
