import React from 'react'
import { Section, Link, Menu, Flex, Heading, Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import { NewIcon, EditIcon } from '@/Components/Icons'
import ItemsTable from '@/Pages/Items/Table'
import AccessoriesTable from '@/Pages/Accessories/Table'
import ConsumablesTable from '@/Pages/Consumables/Table'
import ComponentsTable from '@/Pages/Components/Table'
import LicensesTable from '@/Pages/Licenses/Table'
import ContractsTable from '@/Pages/Contracts/Table'
import ShowPageTableTemplate from '@/Components/Layout/ShowPageTableTemplate'

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
	items: TPaginatedModel<Schema.Item[]>
	accessories: TPaginatedModel<Schema.Accessory[]>
	components: TPaginatedModel<Schema.Component[]>
	consumables: TPaginatedModel<Schema.Consumable[]>
	licenses: TPaginatedModel<Schema.License[]>
	contracts: TPaginatedModel<Schema.Contract[]>
}

const tabs = {
	details: 'details',
	items: 'items',
	accessories: 'accessories',
	components: 'components',
	consumables: 'consumables',
	licenses: 'licenses',
	contracts: 'contracts',
}

const Show = ({ vendor, items, accessories, components, consumables, licenses, contracts }: IVendorShowProps) => {
	const title = vendor.name ?? 'Vendor Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Vendors', href: Routes.vendors() },
			{ title: vendor.name! },
		] }>
			<Tabs urlControlled={ true } defaultValue={ tabs.details } allowTabDeactivation={ true }>
				<Tabs.List>
					<Tabs.Tab value={ tabs.details }>Details</Tabs.Tab>
					<Tabs.Tab value={ tabs.items }>Items ({ vendor.items_count })</Tabs.Tab>
					<Tabs.Tab value={ tabs.accessories }>Accessories ({ vendor.accessories_count })</Tabs.Tab>
					<Tabs.Tab value={ tabs.components }>Components ({ vendor.components_count })</Tabs.Tab>
					<Tabs.Tab value={ tabs.consumables }>Consumables ({ vendor.consumables_count })</Tabs.Tab>
					<Tabs.Tab value={ tabs.licenses }>Licenses ({ vendor.licenses_count })</Tabs.Tab>
					<Tabs.Tab value={ tabs.contracts }>Contracts ({ vendor.contracts_count })</Tabs.Tab>
				</Tabs.List>

				{ /*********** Details ***********/ }
				<Tabs.Panel value={ tabs.details }>
					<Section>
						<Flex position="apart">
							<Heading sx={ { flex: 1 } }>{
								vendor.url ?
									<Link href={ vendor.url } target="_blank" rel="noreferrer">{ title }</Link>
									:
									title
							}</Heading>

							<Menu position="bottom-end">
								<Menu.Target />

								<Menu.Dropdown>
									<Menu.Item
										href={ Routes.editVendor(vendor.slug) }
										icon={ <EditIcon /> }
									>
										Edit
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
							title={ `${vendor.name} Assets` }
							model="items"
							rows={ items.data }
							pagination={ items.pagination }
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
							title={ `${vendor.name} Accessories` }
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
							title={ `${vendor.name} Consumables` }
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
							title={ `${vendor.name} Components` }
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

				{ /*********** LICENSES ***********/ }
				<Tabs.Panel value={ tabs.licenses }>
					<Section>
						<ShowPageTableTemplate
							title={ `${vendor.name} Licenses` }
							model="licenses"
							rows={ licenses?.data }
							pagination={ licenses?.pagination }
							menuOptions={ [
								{ label: 'New License', href: Routes.newLicense(), icon: NewIcon },
							] }
						>
							<LicensesTable wrapper={ false } />
						</ShowPageTableTemplate>
					</Section>
				</Tabs.Panel>

				{ /*********** CONTRACTS ***********/ }
				<Tabs.Panel value={ tabs.contracts }>
					<Section>
						<ShowPageTableTemplate
							title={ `${vendor.name} Contracts` }
							model="contracts"
							rows={ contracts?.data }
							pagination={ contracts?.pagination }
							menuOptions={ [
								{ label: 'New Contract', href: Routes.newContract({ 'contract.vendor_id': vendor.id }), icon: NewIcon },
							] }
						>
							<ContractsTable wrapper={ false } />
						</ShowPageTableTemplate>
					</Section>
				</Tabs.Panel>

			</Tabs>
		</Page>
	)
}

export default Show
