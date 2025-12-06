import { Section, Menu, Group, Title, Tabs, Tooltip, Page } from "@/components"
import { Routes } from "@/lib"

import Associations from "./Associations"
import Details from "./Details"
import Documentations from "./Documentations"
import History from "./History"

export interface ShowAccessoryProps {
	accessory: Schema.AccessoriesShow
}

const tabsList = [
	{ id: "details", label: "Details", component: Details },
	{ id: "history", label: "History", component: History },
	{ id: "documentations", label: "Documentation", component: Documentations },
	{ id: "associations", label: "Associations", component: Associations },
]

const ShowAccessory = ({ accessory }: ShowAccessoryProps) => {
	const title = accessory.name ?? "Accessory Details"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Accessories", href: Routes.accessories() },
			{ title: accessory.name, href: window.location.href },
		] }>

			<Section>
				<Group justify="space-between">
					<Title>{ title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link
								href={ Routes.checkoutAccessory(accessory) }
								disabled={ accessory.qty_available < 1 }
							>
								{ accessory.qty_available < 1 ?
									<Tooltip label="There are none in stock" position="left" withArrow><div>Checkout Accessory</div></Tooltip>
									:
									"Checkout Accessory"
								}
							</Menu.Link>
							<Menu.Link href={ Routes.editAccessory(accessory) }>
								Edit Accessory
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

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
								<Component accessory={ accessory } />
							</Tabs.Panel>
						)
					}) }
				</Tabs>
			</Section>
		</Page>
	)
}

export default ShowAccessory
