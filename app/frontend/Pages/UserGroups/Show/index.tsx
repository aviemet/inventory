import React from 'react'
import { Table, Container, Section, Heading, Page, Group, Menu } from '@/Components'
import { Routes } from '@/lib'
import UsersTable from '@/Pages/Users/Table'
import { EditIcon } from '@/Components/Icons'

interface IShowUserProps {
	person_group: Schema.PersonGroup
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
				<Container>

					<Group position="apart">
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
						<UsersTable />
					</Table.TableProvider>
				</Container>
			</Section>
		</Page>
	)
}

export default ShowUser
