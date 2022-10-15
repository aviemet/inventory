import React from 'react'
import { Section, Menu, Flex, Heading, Tabs, Table, Page } from '@/Components'
import { Routes } from '@/lib'
import { NewIcon, EditIcon } from '@/Components/Icons'
import { TableTitleSection } from '@/Layouts/Components'
import ItemsTable from '@/Pages/Items/Table'
import AccessoriesTable from '@/Pages/Accessories/Table'
import ConsumablesTable from '@/Pages/Consumables/Table'
import ComponentsTable from '@/Pages/Components/Table'
import LicensesTable from '@/Pages/Licenses/Table'
import PeopleTable from '@/Pages/People/Table'

type TPaginatedModel<T> = {
	data: T
	pagination: Schema.Pagination
}

interface IDepartmentShowProps {
	department: Schema.DepartmentWithCounts
	items?: TPaginatedModel<Schema.Item[]>
	accessories?: TPaginatedModel<Schema.Accessory[]>
	components?: TPaginatedModel<Schema.Component[]>
	consumables?: TPaginatedModel<Schema.Consumable[]>
	licenses?: TPaginatedModel<Schema.License[]>
	people?: TPaginatedModel<Schema.Person[]>
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
			<Tabs urlControlled={ true } defaultValue={ tabs.details } allowTabDeactivation={ true }>
				<Tabs.List>
					<Tabs.Tab value={ tabs.details }>Details</Tabs.Tab>
					<Tabs.Tab value={ tabs.items }>Items ({ department.counts.items })</Tabs.Tab>
					<Tabs.Tab value={ tabs.accessories }>Accessories ({ department.counts.accessories })</Tabs.Tab>
					<Tabs.Tab value={ tabs.components }>Components ({ department.counts.components })</Tabs.Tab>
					<Tabs.Tab value={ tabs.consumables }>Consumables ({ department.counts.consumables })</Tabs.Tab>
					<Tabs.Tab value={ tabs.licenses }>Licenses ({ department.counts.licenses })</Tabs.Tab>
					<Tabs.Tab value={ tabs.people }>People ({ department.counts.people })</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel value={ tabs.details }>
					<Section>
						<Flex position="apart">
							<Heading sx={ { flex: 1 } }>{ title }</Heading>

							<Menu position="bottom-end">
								<Menu.Target />

								<Menu.Dropdown>
									<Menu.Item
										href={ Routes.editDepartment(department.slug) }
										icon={ <EditIcon /> }
									>
										Edit
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						</Flex>

						<div>Location: { department.location?.name }</div>
					</Section>
				</Tabs.Panel>

				{ /*********** ITEMS ***********/ }
				<Tabs.Panel value={ tabs.items }>
					<Section>
						<div className='fullHeight'>
							<Table.TableProvider
								selectable
								hideable
								model="items"
								rows={ items?.data }
								pagination={ items?.pagination }
							>
								<TableTitleSection title={ `${title} Items` } menuOptions={ [
									{ label: 'New Asset', href: Routes.newItem(), icon: NewIcon },
								] }>
									<Table.SearchInput />
									<Table.ColumnPicker />
								</TableTitleSection>

								<ItemsTable />

								<Table.Pagination />

							</Table.TableProvider>
						</div>
					</Section>
				</Tabs.Panel>

				{ /*********** ACCESSORIES ***********/ }
				<Tabs.Panel value={ tabs.accessories }>
					<Section>
						<Table.TableProvider
							selectable
							hideable
							model="accessories"
							rows={ accessories?.data }
							pagination={ accessories?.pagination }
						>
							<TableTitleSection title={ `${title} Accessories` } menuOptions={ [
								{ label: 'New Accessory', href: Routes.newAccessory(), icon: NewIcon },
							] }>
								<Table.SearchInput />
								<Table.ColumnPicker />
							</TableTitleSection>

							<AccessoriesTable />

							<Table.Pagination />

						</Table.TableProvider>
					</Section>
				</Tabs.Panel>

				{ /*********** CONSUMABLES ***********/ }
				<Tabs.Panel value={ tabs.consumables }>
					<Section>
						<Table.TableProvider
							selectable
							hideable
							model="consumables"
							rows={ consumables?.data }
							pagination={ consumables?.pagination }
						>
							<TableTitleSection title={ `${title} Consumables` } menuOptions={ [
								{ label: 'New Consumable', href: Routes.newConsumable(), icon: NewIcon },
							] }>
								<Table.SearchInput />
								<Table.ColumnPicker />
							</TableTitleSection>

							<ConsumablesTable />

							<Table.Pagination />

						</Table.TableProvider>
					</Section>
				</Tabs.Panel>

				{ /*********** COMPONENTS ***********/ }
				<Tabs.Panel value={ tabs.components }>
					<Section>
						<Table.TableProvider
							selectable
							hideable
							model="components"
							rows={ components?.data }
							pagination={ components?.pagination }
						>
							<TableTitleSection title={ `${title} Components` } menuOptions={ [
								{ label: 'New Component', href: Routes.newComponent(), icon: NewIcon },
							] }>
								<Table.SearchInput />
								<Table.ColumnPicker />
							</TableTitleSection>

							<ComponentsTable />

							<Table.Pagination />

						</Table.TableProvider>
					</Section>
				</Tabs.Panel>

				{ /*********** LICENSES ***********/ }
				<Tabs.Panel value={ tabs.licenses }>
					<Section>
						<Table.TableProvider
							selectable
							hideable
							model="licenses"
							rows={ licenses?.data }
							pagination={ licenses?.pagination }
						>
							<TableTitleSection title={ `${title} Licenses` } menuOptions={ [
								{ label: 'New License', href: Routes.newLicense(), icon: NewIcon },
							] }>
								<Table.SearchInput />
								<Table.ColumnPicker />
							</TableTitleSection>

							<LicensesTable />

							<Table.Pagination />

						</Table.TableProvider>
					</Section>
				</Tabs.Panel>

				{ /*********** PEOPLE ***********/ }
				<Tabs.Panel value={ tabs.people }>
					<Section>
						<Table.TableProvider
							selectable
							hideable
							model="people"
							rows={ people?.data }
							pagination={ people?.pagination }
						>
							<TableTitleSection title={ `${title} People` } menuOptions={ [
								{ label: 'New Person', href: Routes.newPerson(), icon: NewIcon },
							] }>
								<Table.SearchInput />
								<Table.ColumnPicker />
							</TableTitleSection>

							<PeopleTable />

							<Table.Pagination />

						</Table.TableProvider>
					</Section>
				</Tabs.Panel>

			</Tabs>
		</Page>
	)
}

export default Show
