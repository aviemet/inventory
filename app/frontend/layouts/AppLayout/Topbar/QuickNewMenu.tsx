import cx from "clsx"
import React from "react"

import { Menu, Button } from "@/components"
import {
	PlusCircleIcon,
	ItemsIcon,
	LicensesIcon,
	PeopleIcon,
	TicketsIcon,
	AccessoriesIcon,
	ComponentsIcon,
	ConsumablesIcon,
	VendorsIcon,
	DocumentationIcon,
} from "@/components/Icons"
import { Routes } from "@/lib"

import * as classes from "./TopBar.css"

const QuickNewMenu = () => {
	return (
		<Menu position="bottom-end">
			<Menu.Target>
				<Button variant="default" leftSection={ <PlusCircleIcon /> } className={ cx(classes.newMenu) }> New</Button>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Link href={ Routes.newItem() } leftSection={ <ItemsIcon /> }>
					Item
				</Menu.Link>
				<Menu.Link href={ Routes.newAccessory() } leftSection={ <AccessoriesIcon /> }>
					Accessory
				</Menu.Link>
				<Menu.Link href={ Routes.newComponent() } leftSection={ <ComponentsIcon /> }>
					Component
				</Menu.Link>
				<Menu.Link href={ Routes.newConsumable() } leftSection={ <ConsumablesIcon /> }>
					Consumable
				</Menu.Link>
				<Menu.Link href={ Routes.newLicense() } leftSection={ <LicensesIcon /> }>
					License
				</Menu.Link>

				<Menu.Divider />

				<Menu.Link href={ Routes.newPerson() } leftSection={ <PeopleIcon /> }>
					Person
				</Menu.Link>
				<Menu.Link href={ Routes.newVendor() } leftSection={ <VendorsIcon /> }>
					Vendor
				</Menu.Link>

				<Menu.Divider />

				<Menu.Link href={ Routes.newTicket() } leftSection={ <TicketsIcon /> }>
					Ticket
				</Menu.Link>
				<Menu.Link href={ Routes.newDocumentation() } leftSection={ <DocumentationIcon /> }>
					Documentation
				</Menu.Link>
			</Menu.Dropdown>
		</Menu>
	)
}

export default QuickNewMenu
