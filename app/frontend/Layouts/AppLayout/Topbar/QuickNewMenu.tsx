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
				<Button><PlusCircleIcon /> New</Button>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Item href={ Routes.newItem() } icon={ <ItemsIcon /> }>
					New Item
				</Menu.Item>
				<Menu.Item href={ Routes.newAccessory() } icon={ <AccessoriesIcon /> }>
					New Accessory
				</Menu.Item>
				<Menu.Item href={ Routes.newComponent() } icon={ <ComponentsIcon /> }>
					New Component
				</Menu.Item>
				<Menu.Item href={ Routes.newConsumable() } icon={ <ConsumablesIcon /> }>
					New Consumable
				</Menu.Item>
				<Menu.Item href={ Routes.newLicense() } icon={ <LicensesIcon /> }>
					New License
				</Menu.Item>

				<Menu.Divider />

				<Menu.Item href={ Routes.newPerson() } icon={ <PeopleIcon /> }>
					New Person
				</Menu.Item>

				<Menu.Divider />

				<Menu.Item href={ Routes.newTicket() } icon={ <TicketsIcon /> }>
					New Ticket
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	)
}

export default QuickNewMenu
