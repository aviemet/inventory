import { omit } from "lodash"

import { Section, Menu, Group, Title, Tabs, Page } from "@/components"
import { EditIcon, NewIcon } from "@/components/Icons"
import ShowPageTableTemplate from "@/features/ShowPageTableTemplate"
import { Routes } from "@/lib"
import AccessoriesTable from "@/domains/Accessories/Table"
import ConsumablesTable from "@/domains/Consumables/Table"
import ItemsTable from "@/domains/Items/Table"
import { type PaginatedModel } from "@/types/PaginatedModel"

import ComponentsTable from "@/domains/Components/Table"

interface ShowManufacturerProps {
	manufacturer: Schema.ManufacturersShow
	items: PaginatedModel<Schema.ItemsIndex[]>
	accessories: PaginatedModel<Schema.AccessoriesIndex[]>
	components: PaginatedModel<Schema.ComponentsIndex[]>
	consumables: PaginatedModel<Schema.ConsumablesIndex[]>
}

const tabs = {
	details: "details",
	items: "items",
	accessories: "accessories",
	components: "components",
	consumables: "consumables",
}

const Show = ({ manufacturer, items, accessories, components, consumables }: ShowManufacturerProps) => {
	const title = manufacturer.name ?? "Manufacturer Details"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Manufacturers", href: Routes.manufacturers() },
			{ title: manufacturer.name, href: window.location.href },
		] }>
			<Tabs defaultValue={ tabs.details } urlControlled={ true } dependencies={ omit(tabs, "details") }>
				<Tabs.List>
					<Tabs.Tab value={ tabs.details }>Details</Tabs.Tab>
					<Tabs.Tab value={ tabs.items }>Items ({ manufacturer.counts.items })</Tabs.Tab>
					<Tabs.Tab value={ tabs.accessories }>Accessories ({ manufacturer.counts.accessories })</Tabs.Tab>
					<Tabs.Tab value={ tabs.components }>Components ({ manufacturer.counts.components })</Tabs.Tab>
					<Tabs.Tab value={ tabs.consumables }>Consumables ({ manufacturer.counts.consumables })</Tabs.Tab>
				</Tabs.List>

				{ /** ********* Details ***********/ }
				<Tabs.Panel value={ tabs.details }>
					<Section>
						<Group justify="space-between">
							<Title>{ title }</Title>

							<Menu position="bottom-end">
								<Menu.Target />

								<Menu.Dropdown>
									<Menu.Link href={ Routes.editManufacturer(manufacturer.slug) } leftSection={ <EditIcon /> }>Edit
									</Menu.Link>
								</Menu.Dropdown>
							</Menu>
						</Group>
					</Section>
				</Tabs.Panel>

				{ /** ********* ITEMS ***********/ }
				<Tabs.Panel value={ tabs.items }>
					<Section>
						<ShowPageTableTemplate
							title={ `${manufacturer.name} Assets` }
							model="items"
							rows={ items?.data }
							pagination={ items?.pagination }
							menuOptions={ [
								{ label: "New Asset", href: Routes.newItem(), icon: <NewIcon /> },
							] }
						>
							<ItemsTable wrapper={ false } />
						</ShowPageTableTemplate>
					</Section>
				</Tabs.Panel>

				{ /** ********* ACCESSORIES ***********/ }
				<Tabs.Panel value={ tabs.accessories }>
					<Section>
						<ShowPageTableTemplate
							title={ `${manufacturer.name} Accessories` }
							model="accessories"
							rows={ accessories?.data }
							pagination={ accessories?.pagination }
							menuOptions={ [
								{ label: "New Accessory", href: Routes.newAccessory(), icon: <NewIcon /> },
							] }
						>
							<AccessoriesTable wrapper={ false } />
						</ShowPageTableTemplate>
					</Section>
				</Tabs.Panel>

				{ /** ********* CONSUMABLES ***********/ }
				<Tabs.Panel value={ tabs.consumables }>
					<Section>
						<ShowPageTableTemplate
							title={ `${manufacturer.name} Consumables` }
							model="consumables"
							rows={ consumables?.data }
							pagination={ consumables?.pagination }
							menuOptions={ [
								{ label: "New Consumable", href: Routes.newConsumable(), icon: <NewIcon /> },
							] }
						>
							<ConsumablesTable wrapper={ false } />
						</ShowPageTableTemplate>
					</Section>
				</Tabs.Panel>

				{ /** ********* COMPONENTS ***********/ }
				<Tabs.Panel value={ tabs.components }>
					<Section>
						<ShowPageTableTemplate
							title={ `${manufacturer.name} Components` }
							model="components"
							rows={ components?.data }
							pagination={ components?.pagination }
							menuOptions={ [
								{ label: "New Component", href: Routes.newComponent(), icon: <NewIcon /> },
							] }
						>
							<ComponentsTable wrapper={ false } />
						</ShowPageTableTemplate>
					</Section>
				</Tabs.Panel>

			</Tabs>
		</Page>
	)
}

export default Show
