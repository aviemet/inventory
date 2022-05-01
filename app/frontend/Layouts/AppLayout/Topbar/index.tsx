import React from 'react'
import { Link } from '@/Components'
import {
	MenuBarsIcon,
	PlusCircleIcon,
	ItemsIcon,
	LicensesIcon,
	PeopleIcon,
	TicketsIcon,
	AccessoriesIcon,
	ComponentsIcon,
	ConsumablesIcon,
} from '@/Components/Icons'
import { useAuth } from '@/Providers'
import ActiveCompanyDropdown from './ActiveCompanyDropdown'
import { Option, Popover } from '@/Components/Popover'
import tw, { styled } from 'twin.macro'
import { Routes } from '@/lib'
import { IconContext } from 'react-icons'
import { useLayout } from '@/Providers'

const Topbar = () => {
	const { user } = useAuth()
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
					<Popover icon={ PlusCircleIcon }>
						<Option href={ Routes.newItem() }>
							<ItemsIcon />New Item
						</Option>
						<Option href={ Routes.newAccessory() }>
							<AccessoriesIcon />New Accessory
						</Option>
						<Option href={ Routes.newComponent() }>
							<ComponentsIcon />New Component
						</Option>
						<Option href={ Routes.newConsumable() }>
							<ConsumablesIcon />New Consumable
						</Option>
						<Option href={ Routes.newLicense() }>
							<LicensesIcon />New License
						</Option>
						<Option href={ Routes.newPerson() }>
							<PeopleIcon />New Person
						</Option>
						<Option href={ '#'/*Routes.newTicket()*/ }>
							<TicketsIcon />New Ticket
						</Option>
					</Popover>
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
