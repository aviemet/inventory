import React from 'react'
import { Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import Details from './Details'
import Items from './Items'
import Accessories from './Accessories'
import Components from './Components'
import Consumables from './Consumables'
import Licenses from './Licenses'
import People from './People'

interface DepartmentShowProps {
	department: Schema.DepartmentsShow
	items: PaginatedModel<Schema.Item[]>
	accessories: PaginatedModel<Schema.Accessory[]>
	components: PaginatedModel<Schema.Component[]>
	consumables: PaginatedModel<Schema.Consumable[]>
	licenses: PaginatedModel<Schema.License[]>
	people: PaginatedModel<Schema.Person[]>
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

const Show = ({ department, items, accessories, components, consumables, licenses, people }: DepartmentShowProps) => {
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
					<Details title={ title } department={ department } />
				</Tabs.Panel>

				{ /*********** ITEMS ***********/ }
				<Tabs.Panel value={ tabs.items }>
					<Items items={ items } department={ department } />
				</Tabs.Panel>

				{ /*********** ACCESSORIES ***********/ }
				<Tabs.Panel value={ tabs.accessories }>
					<Accessories accessories={ accessories } department={ department } />
				</Tabs.Panel>

				{ /*********** CONSUMABLES ***********/ }
				<Tabs.Panel value={ tabs.consumables }>
					<Consumables consumables={ consumables } department={ department } />
				</Tabs.Panel>

				{ /*********** COMPONENTS ***********/ }
				<Tabs.Panel value={ tabs.components }>
					<Components components={ components } department={ department } />
				</Tabs.Panel>

				{ /*********** LICENSES ***********/ }
				<Tabs.Panel value={ tabs.licenses }>
					<Licenses licenses={ licenses } department={ department } />
				</Tabs.Panel>

				{ /*********** PEOPLE ***********/ }
				<Tabs.Panel value={ tabs.people }>
					<People people={ people } department={ department } />
				</Tabs.Panel>

			</Tabs>
		</Page>
	)
}

export default Show
