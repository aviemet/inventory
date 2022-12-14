import React from 'react'
import { Section, Menu, Flex, Heading, Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import { EditIcon, NewIcon } from '@/Components/Icons'
import ShowPageTableTemplate from '@/Layouts/AppLayout/Components/ShowPageTableTemplate'
import ItemsTable from '@/Pages/Items/Table'
import AccessoriesTable from '@/Pages/Accessories/Table'
import ConsumablesTable from '@/Pages/Consumables/Table'
import ComponentsTable from '@/Pages/Components/Table'

type ShowPageManufacturer = Schema.Manufacturer & {
	items_count: number
	accessories_count: number
	consumables_count: number
	components_count: number
}

type TPaginatedModel<T> = {
	data: T
	pagination: Schema.Pagination
}

interface IShowManufacturerProps {
	manufacturer: ShowPageManufacturer
	items: TPaginatedModel<Schema.Item[]>
	accessories: TPaginatedModel<Schema.Accessory[]>
	components: TPaginatedModel<Schema.Component[]>
	consumables: TPaginatedModel<Schema.Consumable[]>
}

const tabs = {
	details: 'details',
	items: 'items',
	accessories: 'accessories',
	components: 'components',
	consumables: 'consumables',
}

const Show = ({ manufacturer, items, accessories, components, consumables }: IShowManufacturerProps) => {
	const title = manufacturer.name ?? 'Manufacturer Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Manufacturer', href: Routes.manufacturers() },
			{ title: manufacturer.name! },
		] }>
			<Tabs defaultValue={ tabs.details } urlControlled={ true } dependencies={ {
				[tabs.items]: 'items',
				[tabs.accessories]: 'accessories',
				[tabs.components]: 'components',
				[tabs.consumables]: 'consumables',
			} }>
				<Tabs.List>
					<Tabs.Tab value={ tabs.details }>Details</Tabs.Tab>
					<Tabs.Tab value={ tabs.items }>Items ({ manufacturer.items_count })</Tabs.Tab>
					<Tabs.Tab value={ tabs.accessories }>Accessories ({ manufacturer.accessories_count })</Tabs.Tab>
					<Tabs.Tab value={ tabs.components }>Components ({ manufacturer.components_count })</Tabs.Tab>
					<Tabs.Tab value={ tabs.consumables }>Consumables ({ manufacturer.consumables_count })</Tabs.Tab>
				</Tabs.List>

				{ /*********** Details ***********/ }
				<Tabs.Panel value={ tabs.details }>
					<Section>
						<Flex position="apart">
							<Heading sx={ { flex: 1 } }>{ title }</Heading>

							<Menu position="bottom-end">
								<Menu.Target />

								<Menu.Dropdown>
									<Menu.Item href={ Routes.editManufacturer(manufacturer.slug) } icon={ <EditIcon /> }>Edit
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						</Flex>
					</Section>
				</Tabs.Panel>

				{ /*********** ITEMS ***********/ }
				<Tabs.Panel value={ tabs.items }>
					<Section>
						<ShowPageTableTemplate
							title={ `${manufacturer.name} Assets` }
							model="items"
							rows={ items?.data }
							pagination={ items?.pagination }
							menuOptions={ [
								{ label: 'New Asset', href: Routes.newItem(), icon: NewIcon },
							] }
						>
							<ItemsTable wrapper={ false } />
						</ShowPageTableTemplate>
					</Section>
				</Tabs.Panel>

				{ /*********** ACCESSORIES ***********/ }
				<Tabs.Panel value={ tabs.accessories }>
					<Section>
						<ShowPageTableTemplate
							title={ `${manufacturer.name} Accessories` }
							model="accessories"
							rows={ accessories?.data }
							pagination={ accessories?.pagination }
							menuOptions={ [
								{ label: 'New Accessory', href: Routes.newAccessory(), icon: NewIcon },
							] }
						>
							<AccessoriesTable wrapper={ false } />
						</ShowPageTableTemplate>
					</Section>
				</Tabs.Panel>

				{ /*********** CONSUMABLES ***********/ }
				<Tabs.Panel value={ tabs.consumables }>
					<Section>
						<ShowPageTableTemplate
							title={ `${manufacturer.name} Consumables` }
							model="consumables"
							rows={ consumables?.data }
							pagination={ consumables?.pagination }
							menuOptions={ [
								{ label: 'New Consumable', href: Routes.newConsumable(), icon: NewIcon },
							] }
						>
							<ConsumablesTable wrapper={ false } />
						</ShowPageTableTemplate>
					</Section>
				</Tabs.Panel>

				{ /*********** COMPONENTS ***********/ }
				<Tabs.Panel value={ tabs.components }>
					<Section>
						<ShowPageTableTemplate
							title={ `${manufacturer.name} Components` }
							model="components"
							rows={ components?.data }
							pagination={ components?.pagination }
							menuOptions={ [
								{ label: 'New Component', href: Routes.newComponent(), icon: NewIcon },
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
