import React from 'react'
import { Table, Section, Heading, Page, Group, Menu } from '@/Components'
import { Routes } from '@/lib'
import PeopleTable from '@/Pages/People/Table'
import { EditIcon } from '@/Components/Icons'

interface IShowUserProps {
	person_group: Schema.PersonGroupsShow
}

const ShowUser = ({ person_group }: IShowUserProps) => {
	const title = `${person_group.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'People', href: Routes.people() },
			{ title: 'Groups', href: Routes.personGroups() },
			{ title },
		] }>
			<Section>

				<Group justify="space-between">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editPersonGroup(person_group.slug) } icon={ <EditIcon /> }>
								Edit
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

				<Table.TableProvider
					selectable
					hideable
					model='user'
					rows={ person_group.people }
				>
					<PeopleTable />
				</Table.TableProvider>
			</Section>
		</Page>
	)
}

export default ShowUser
