import React from 'react'
import { Section, Menu, Group, Title, Tabs, Page } from '@/Components'
import { Routes } from '@/lib'
import { EditIcon } from '@/Components/Icons'
import Details from './Details'
import PersonHistory from './PersonHistory'
import Associations from './Associations'
import Documentations from './Documentations'

export interface ShowPersonProps {
	person: Schema.PeopleShow
}

const tabsList = [
	{ id: 'details', label: 'Details', component: Details },
	{ id: 'history', label: 'History', component: PersonHistory },
	{ id: 'documentations', label: 'Documentation', component: Documentations },
	{ id: 'associations', label: 'Associations', component: Associations },
]

const ShowPerson = ({ person }: ShowPersonProps) => {
	const title = person.name ?? 'Person Details'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'People', href: Routes.people() },
			{ title: person.name, href: window.location.href },
		] }>
			<Section fullHeight>
				<Group justify="space-between">
					<Title style={ { flex: 1 } }>{ title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editPerson(person) } leftSection={ <EditIcon /> }>
								Edit Person
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
								<Component person={ person } />
							</Tabs.Panel>
						)
					}) }

				</Tabs>
			</Section>
		</Page>
	)
}

export default ShowPerson
