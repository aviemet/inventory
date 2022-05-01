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

const Topbar = () => {
	const { user } = useAuth()

	return (
		<TopbarHeader id="topbar">
			<div tw="flex">
				<div tw="sm:hidden cursor-pointer">
					<MenuBarsIcon id="topbar-menu-toggle" />
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
			</div>
		</TopbarHeader>
	)
}

export default Topbar

const TopbarHeader = styled.header`
	margin-bottom: 1px;

	${tw`dark:bg-gray-600 px-2 py-1 bg-white shadow`}

	#topbar-menu-toggle {
		padding: 6px 37px 0 5px;
	}
`
