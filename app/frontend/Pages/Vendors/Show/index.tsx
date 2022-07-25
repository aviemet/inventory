import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Link, Menu, Flex, Heading, Tabs, Table } from '@/Components'
import { Routes } from '@/lib'
import { NewIcon, EditIcon } from '@/Components/Icons'
import ItemsTable from '@/Pages/Items/Table'
import AccessoriesTable from '@/Pages/Accessories/Table'

type ShowPageVendor = Schema.Vendor & {
	items_count: number
	accessories_count: number
	consumables_count: number
	components_count: number
	licenses_count: number
	contracts_count: number
}

type TPaginatedModel<T> = {
	data: T
	pagination: Schema.Pagination
}

interface IVendorShowProps {
	vendor: ShowPageVendor
	items?: TPaginatedModel<Schema.Item[]>
	accessories?: TPaginatedModel<Schema.Accessory[]>
	components?: TPaginatedModel<Schema.Component[]>
	consumables?: TPaginatedModel<Schema.Consumable[]>
	licenses?: TPaginatedModel<Schema.License[]>
	contracts?: TPaginatedModel<Schema.Contract[]>
}

const Show = ({ vendor, items, accessories, components, consumables, licenses, contracts }: IVendorShowProps) => {
	const title = vendor.name ?? 'Vendor Details'

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Flex position="apart">
					<Heading sx={ { flex: 1 } }>{
						vendor.url ?
							<Link href={ vendor.url } target="_blank" rel="noreferrer">{ title }</Link>
							:
							title
					}</Heading>

					<Menu>
						<Menu.Item href={ Routes.editVendor(vendor.slug) } icon={ <EditIcon /> }>
							Edit
						</Menu.Item>
					</Menu>
				</Flex>

				<Tabs useUrlHash={ true }>
					{ /*********** ITEMS ***********/ }
					<Tabs.Tab tabKey="items" label={ `Hardware (${vendor.items_count})` }>

						<div className='fullHeight'>
							<Table.TableProvider
								selectable
								hideable
								model="items"
								rows={ items?.data }
								pagination={ items?.pagination }
							>
								<Table.Title
									title={ title }
									menuOptions={ [
										{ label: 'New Asset', href: Routes.newItem(), icon: NewIcon },
									] }
								/>
								<ItemsTable />
								<Table.Pagination />
							</Table.TableProvider>
						</div>
					</Tabs.Tab>

					{ /*********** ACCESSORIES ***********/ }
					<Tabs.Tab tabKey="accessories" label={ `Accessories (${vendor.accessories_count})` }>
						<Table.TableProvider
							selectable
							hideable
							model="accessories"
							rows={ accessories?.data }
							pagination={ accessories?.pagination }
						>
							<Table.Title
								title={ title }
								menuOptions={ [
									{ label: 'New Accessory', href: Routes.newAccessory(), icon: NewIcon },
								] }
							/>
							<AccessoriesTable />
							<Table.Pagination />
						</Table.TableProvider>
					</Tabs.Tab>

					{ /*********** CONSUMABLES ***********/ }
					<Tabs.Tab tabKey="consumables" label={ `Consumables (${vendor.consumables_count})` }>
						<Table.TableProvider
							selectable
							hideable
							model="consumables"
							rows={ consumables?.data }
							pagination={ consumables?.pagination }
						>
							<Table.Title
								title={ title }
								menuOptions={ [
									{ label: 'New Consumable', href: Routes.newConsumable(), icon: NewIcon },
								] }
							/>
							<AccessoriesTable />
							<Table.Pagination />
						</Table.TableProvider>
					</Tabs.Tab>

					{ /*********** COMPONENTS ***********/ }
					<Tabs.Tab tabKey="components" label={ `Components (${vendor.components_count})` }>
						<Table.TableProvider
							selectable
							hideable
							model="components"
							rows={ components?.data }
							pagination={ components?.pagination }
						>
							<Table.Title
								title={ title }
								menuOptions={ [
									{ label: 'New Component', href: Routes.newComponent(), icon: NewIcon },
								] }
							/>
							<AccessoriesTable />
							<Table.Pagination />
						</Table.TableProvider>
					</Tabs.Tab>

					{ /*********** LICENSES ***********/ }
					<Tabs.Tab tabKey="licenses" label={ `Licenses (${vendor.licenses_count})` }>
						<Table.TableProvider
							selectable
							hideable
							model="licenses"
							rows={ licenses?.data }
							pagination={ licenses?.pagination }
						>
							<Table.Title
								title={ title }
								menuOptions={ [
									{ label: 'New License', href: Routes.newLicense(), icon: NewIcon },
								] }
							/>
							<AccessoriesTable />
							<Table.Pagination />
						</Table.TableProvider>
					</Tabs.Tab>

					{ /*********** CONTRACTS ***********/ }
					<Tabs.Tab tabKey="contracts" label={ `Contracts (${vendor.contracts_count})` }>
						<Table.TableProvider
							selectable
							hideable
							model="contracts"
							rows={ contracts?.data }
							pagination={ contracts?.pagination }
						>
							<Table.Title
								title={ title }
								menuOptions={ [
									{ label: 'New Contract', href: Routes.newContract(), icon: NewIcon },
								] }
							/>
							<AccessoriesTable />
							<Table.Pagination />
						</Table.TableProvider>
					</Tabs.Tab>

				</Tabs>

			</Section>
		</>
	)
}

export default Show
