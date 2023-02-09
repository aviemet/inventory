import React from 'react'
import { Section, Menu, Flex, Heading, Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import { NewIcon, EditIcon } from '@/Components/Icons'
import ItemsTable from '@/Pages/Items/Table'
import AccessoriesTable from '@/Pages/Accessories/Table'
import ConsumablesTable from '@/Pages/Consumables/Table'
import ComponentsTable from '@/Pages/Components/Table'
import LicensesTable from '@/Pages/Licenses/Table'
import PeopleTable from '@/Pages/People/Table'
import ShowPageTableTemplate from '@/Layouts/AppLayout/Components/ShowPageTableTemplate'

type TPaginatedModel<T> = {
	data: T
	pagination: Schema.Pagination
}

interface IDepartmentShowProps {
	department: Schema.DepartmentWithCounts
	items: TPaginatedModel<Schema.Item[]>
	accessories: TPaginatedModel<Schema.Accessory[]>
	components: TPaginatedModel<Schema.Component[]>
	consumables: TPaginatedModel<Schema.Consumable[]>
	licenses: TPaginatedModel<Schema.License[]>
	people: TPaginatedModel<Schema.Person[]>
}

const tabs = {
	details: 'details',
	items: 'items',
	accessories: 'accessories',
	components: 'components',
	consumables: 'consumables',
	licenses: 'licenses',
	people: 'people',
}

const Show = ({ department, items, accessories, components, consumables, licenses, people }: IDepartmentShowProps) => {
	const title = department.name ?? 'Department Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Departments', href: Routes.departments() },
			{ title: department.name! },
		] }>
			<Tabs defaultValue={ tabs.details } urlControlled={ true } dependencies={ {
				[tabs.items]: 'items',
				[tabs.accessories]: 'accessories',
				[tabs.components]: 'components',
				[tabs.consumables]: 'consumables',
				[tabs.licenses]: 'licenses',
				[tabs.people]: 'people',
			} }>
				<Tabs.List>
					<Tabs.Tab value={ tabs.details }>Details</Tabs.Tab>
					<Tabs.Tab value={ tabs.items }>Items ({ department.counts.items })</Tabs.Tab>
					<Tabs.Tab value={ tabs.accessories }>Accessories ({ department.counts.accessories })</Tabs.Tab>
					<Tabs.Tab value={ tabs.components }>Components ({ department.counts.components })</Tabs.Tab>
					<Tabs.Tab value={ tabs.consumables }>Consumables ({ department.counts.consumables })</Tabs.Tab>
					<Tabs.Tab value={ tabs.licenses }>Licenses ({ department.counts.licenses })</Tabs.Tab>
					<Tabs.Tab value={ tabs.people }>People ({ department.counts.people })</Tabs.Tab>
				</Tabs.List>

				{ /*********** Details ***********/ }
				<Tabs.Panel value={ tabs.details }>
					<Section>
						<Flex position="apart">
							<Heading sx={ { flex: 1 } }>{ title }</Heading>

							<Menu position="bottom-end">
								<Menu.Target />

								<Menu.Dropdown>
									<Menu.Link
										href={ Routes.editDepartment(department.slug) }
										icon={ <EditIcon /> }
									>
										Edit
									</Menu.Link>
								</Menu.Dropdown>
							</Menu>
						</Flex>

						<div>Location: { department.location?.name }</div>
					</Section>
				</Tabs.Panel>

				{ /*********** ITEMS ***********/ }
				<Tabs.Panel value={ tabs.items }>
					<Section>
						<ShowPageTableTemplate
							title={ `${department.name} Assets` }
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
							title={ `${department.name} Accessories` }
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
							title={ `${department.name} Consumables` }
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
							title={ `${department.name} Components` }
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
							title={ `${department.name} Licenses` }
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

				{ /*********** PEOPLE ***********/ }
				<Tabs.Panel value={ tabs.people }>
					<Section>
						<ShowPageTableTemplate
							title={ `${department.name} People` }
							model="people"
							rows={ people?.data }
							pagination={ people?.pagination }
							menuOptions={ [
								{ label: 'New Person', href: Routes.newPerson(), icon: NewIcon },
							] }
						>
							<PeopleTable wrapper={ false } />
						</ShowPageTableTemplate>
					</Section>
				</Tabs.Panel>

			</Tabs>
		</Page>
	)
}

export default Show
