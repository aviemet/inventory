import { Tooltip } from "@mantine/core"
import React from "react"

import { Section, Menu, Flex, Title, Tabs, Page } from "@/components"
import { Routes } from "@/lib"

import Associations from "./Associations"
import Details from "./Details"
import Documentations from "./Documentations"
import History from "./History"

export interface ShowConsumableProps {
	consumable: Schema.ConsumablesShow
}

const tabsList = [
	{ id: "details", label: "Details", component: Details },
	{ id: "history", label: "History", component: History },
	{ id: "documentations", label: "Documentation", component: Documentations },
	{ id: "associations", label: "Associations", component: Associations },
]

const ShowConsumable = ({ consumable }: ShowConsumableProps) => {
	const title = consumable.name ?? "Consumable Details"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Consumables", href: Routes.consumables() },
			{ title: consumable.name, href: window.location.href },
		] }>
			<Section>
				<Flex>
					<Title style={ { flex: 1 } }>{ title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link
								href={ Routes.checkoutConsumable(consumable) }
								disabled={ consumable.qty_available < 1 }
							>
								{ consumable.qty_available < 1 ?
									<Tooltip label="There are none in stock" position="left" withArrow><div>Checkout Consumable</div></Tooltip>
									:
									"Checkout Consumable"
								}
							</Menu.Link>
							<Menu.Link href={ Routes.editConsumable(consumable) }>
								Edit Consumable
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Flex>

				<Tabs urlControlled={ true } defaultValue={ tabsList[0].id }>
					<Tabs.List>
						{ tabsList.map(tab => (
							<Tabs.Tab key={ tab.id } value={ tab.id }>{ tab.label }</Tabs.Tab>
						)) }
					</Tabs.List>

					{ tabsList.map(tab => {
						const Component = tab.component

						return (
							<Tabs.Panel key={ tab.id } value={ tab.id } p="md">
								<Component consumable={ consumable } />
							</Tabs.Panel>
						)
					}) }
				</Tabs>

			</Section>
		</Page>
	)
}

export default ShowConsumable
