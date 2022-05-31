import React from 'react'
import { Option, Popover } from '@/Components/Popover'
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
	)
}

export default QuickNewMenu
