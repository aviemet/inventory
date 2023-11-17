import React from 'react'
import { Table, Heading, Page, Group, Menu } from '@/Components'
import { Routes } from '@/lib'
import { EditIcon } from '@/Components/Icons'
import GroupMembersTable from './GroupMembersTable'

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
			<Table.Section>

				<Group justify="space-between">
					<Heading mb={ 8 }>Group: { title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editPersonGroup(person_group.slug) } leftSection={ <EditIcon /> }>
								Edit
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

				<Table.TableProvider
					selectable
					model='people'
					rows={ person_group.people }
				>
					<GroupMembersTable />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default ShowUser
