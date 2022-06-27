import React from 'react'
import { Menu, Link } from '@/Components'
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
		<Menu label="New" icon={ <PlusCircleIcon /> }>
			<Link href={ Routes.newItem() }>
				<Menu.Item><ItemsIcon />New Item</Menu.Item>
			</Link>
			<Link href={ Routes.newAccessory() }>
				<Menu.Item><AccessoriesIcon />New Accessory</Menu.Item>
			</Link>
			<Link href={ Routes.newComponent() }>
				<Menu.Item><ComponentsIcon />New Component</Menu.Item>
			</Link>
			<Link href={ Routes.newConsumable() }>
				<Menu.Item><ConsumablesIcon />New Consumable</Menu.Item>
			</Link>
			<Link href={ Routes.newLicense() }>
				<Menu.Item><LicensesIcon />New License</Menu.Item>
			</Link>
			<Link href={ Routes.newPerson() }>
				<Menu.Item><PeopleIcon />New Person</Menu.Item>
			</Link>
			<Link href={ '#'/*Routes.newTicket()*/ }>
				<Menu.Item><TicketsIcon />New Ticket</Menu.Item>
			</Link>
		</Menu>
	)
}

export default QuickNewMenu
