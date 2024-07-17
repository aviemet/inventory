import React from 'react'
import { Section, Link, Menu, Group, Title, Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import { NewIcon, EditIcon } from '@/Components/Icons'
import ItemsTable from '@/Pages/Items/Table'
import AccessoriesTable from '@/Pages/Accessories/Table'
import ConsumablesTable from '@/Pages/Consumables/Table'
import ComponentsTable from '@/Pages/Components/Table'
import LicensesTable from '@/Pages/Licenses/Table'
import ContractsTable from '@/Pages/Contracts/Table'
import ShowPageTableTemplate from '@/Features/ShowPageTableTemplate'
import { type PaginatedModel } from '@/types/PaginatedModel'

interface VendorShowProps {
	vendor: Schema.VendorsShow
	items: PaginatedModel<Schema.ItemsIndex[]>
	accessories: PaginatedModel<Schema.AccessoriesIndex[]>
	components: PaginatedModel<Schema.ComponentsIndex[]>
	consumables: PaginatedModel<Schema.ConsumablesIndex[]>
	licenses: PaginatedModel<Schema.LicensesIndex[]>
	contracts: PaginatedModel<Schema.ContractsIndex[]>
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

const Show = ({ vendor, items, accessories, components, consumables, licenses, contracts }: VendorShowProps) => {
	const title = vendor.name ?? 'Vendor Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Vendors', href: Routes.vendors() },
			{ title: vendor.name, href: window.location.href },
		] }>
			<Tabs defaultValue={ tabs.details } urlControlled={ true } dependencies={ {
				[tabs.items]: 'items',
				[tabs.accessories]: 'accessories',
				[tabs.components]: 'components',
				[tabs.consumables]: 'consumables',
				[tabs.licenses]: 'licenses',
				[tabs.contracts]: 'contracts',
			} }>
				<Tabs.List>
					<Tabs.Tab value={ tabs.details }>Details</Tabs.Tab>
					<Tabs.Tab value={ tabs.items }>Items ({ vendor.counts.items })</Tabs.Tab>
					<Tabs.Tab value={ tabs.accessories }>Accessories ({ vendor.counts.accessories })</Tabs.Tab>
					<Tabs.Tab value={ tabs.components }>Components ({ vendor.counts.components })</Tabs.Tab>
					<Tabs.Tab value={ tabs.consumables }>Consumables ({ vendor.counts.consumables })</Tabs.Tab>
					<Tabs.Tab value={ tabs.licenses }>Licenses ({ vendor.counts.licenses })</Tabs.Tab>
					<Tabs.Tab value={ tabs.contracts }>Contracts ({ vendor.counts.contracts })</Tabs.Tab>
				</Tabs.List>

				{ /*********** Details ***********/ }
				<Tabs.Panel value={ tabs.details }>
					<Section>
						<Group justify="space-between">
							<Title>{
								vendor.url ?
									<Link href={ vendor.url } target="_blank" rel="noreferrer">{ title }</Link>
									:
									title
							}</Title>

							<Menu position="bottom-end">
								<Menu.Target />

								<Menu.Dropdown>
									<Menu.Link
										href={ Routes.editVendor(vendor.slug) }
										leftSection={ <EditIcon /> }
									>
										Edit
									</Menu.Link>
								</Menu.Dropdown>
							</Menu>
						</Group>
					</Section>
				</Tabs.Panel>

				{ /*********** ITEMS ***********/ }
				<Tabs.Panel value={ tabs.items }>
					<Section>
						<ShowPageTableTemplate
							title={ `${vendor.name} Assets` }
							model="items"
							rows={ items?.data }
							pagination={ items?.pagination }
							menuOptions={ [
								{ label: 'New Asset', href: Routes.newItem(), icon: <NewIcon /> },
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
								{ label: 'New Accessory', href: Routes.newAccessory(), icon: <NewIcon /> },
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
								{ label: 'New Consumable', href: Routes.newConsumable(), icon: <NewIcon /> },
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
								{ label: 'New Component', href: Routes.newComponent(), icon: <NewIcon /> },
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
								{ label: 'New License', href: Routes.newLicense(), icon: <NewIcon /> },
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
								{ label: 'New Contract', href: Routes.newContract({ 'contract.vendor_id': vendor.id }), icon: <NewIcon /> },
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
