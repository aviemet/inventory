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
	VendorsIcon,
	DocumentationIcon,
} from '@/Components/Icons'
import { Routes } from '@/lib'
import { useViewportSize } from '@mantine/hooks'
import { px, useMantineTheme, useComputedColorScheme } from '@mantine/core'

const QuickNewMenu = () => {
	const { width } = useViewportSize()
	const theme = useMantineTheme()
	const computedColorScheme = useComputedColorScheme('dark')

	if(width < Number(px(theme.breakpoints.sm))) {
		return <></>
	}

	return (
		<Menu position="bottom-end">
			<Menu.Target>
				<Button variant="default" leftSection={ <PlusCircleIcon /> }> New</Button>
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
