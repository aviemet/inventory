import React from 'react'
import { Link } from '@/Components'
import {
	ItemsIcon,
	LicensesIcon,
	PeopleIcon,
	TicketsIcon,
	MenuBarsIcon,
	PlusCircleIcon,
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
						<Option>
							<Link href={ Routes.newItem() }><ItemsIcon />New Item</Link>
						</Option>
						<Option>
							<Link href={ Routes.newAccessory() }>New Accessory</Link>
						</Option>
						<Option>
							<Link href={ Routes.newComponent() }>New Component</Link>
						</Option>
						<Option>
							<Link href={ Routes.newConsumable() }>New Consumable</Link>
						</Option>
						<Option>
							<Link href={ Routes.newLicense() }><LicensesIcon />New License</Link>
						</Option>
						<Option>
							<Link href={ Routes.newPerson() }><PeopleIcon />New Person</Link>
						</Option>
						<Option>
							<Link href={ '#'/*Routes.newTicket()*/ }><TicketsIcon />New Ticket</Link>
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
