import React from 'react'
import { Menu, Button } from '@/Components'
import {
	PlusCircleIcon,
	ItemsIcon,
	LicensesIcon,
	PeopleIcon,
	TicketsIcon,
	AccessoriesIcon,
	ComponentsIcon,
	ConsumablesIcon,
} from '@/Components/Icons'
import { Routes } from '@/lib'

const QuickNewMenu = () => {
	return (
		<Menu position="bottom-end">
			<Menu.Target>
				<Button leftIcon={ <PlusCircleIcon /> }> New</Button>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Link href={ Routes.newItem() } icon={ <ItemsIcon /> }>
					New Item
				</Menu.Link>
				<Menu.Link href={ Routes.newAccessory() } icon={ <AccessoriesIcon /> }>
					New Accessory
				</Menu.Link>
				<Menu.Link href={ Routes.newComponent() } icon={ <ComponentsIcon /> }>
					New Component
				</Menu.Link>
				<Menu.Link href={ Routes.newConsumable() } icon={ <ConsumablesIcon /> }>
					New Consumable
				</Menu.Link>
				<Menu.Link href={ Routes.newLicense() } icon={ <LicensesIcon /> }>
					New License
				</Menu.Link>

				<Menu.Divider />

				<Menu.Link href={ Routes.newPerson() } icon={ <PeopleIcon /> }>
					New Person
				</Menu.Link>

				<Menu.Divider />

				<Menu.Link href={ Routes.newTicket() } icon={ <TicketsIcon /> }>
					New Ticket
				</Menu.Link>
			</Menu.Dropdown>
		</Menu>
	)
}

export default QuickNewMenu
