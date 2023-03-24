import React from 'react'
import { Table, Container, Section, Heading, Page, Flex, Menu } from '@/Components'
import { Routes } from '@/lib'
import UsersTable from '@/Pages/Users/Table'
import { EditIcon } from '@/Components/Icons'

interface IShowUserProps {
	user_group: Schema.UserGroup
}

const ShowUser = ({ user_group }: IShowUserProps) => {
	const title = `${user_group.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Users', href: Routes.users() },
			{ title: 'Groups', href: Routes.userGroups() },
			{ title },
		] }>
			<Section>
				<Container>

					<Flex position="apart">
						<Heading sx={ { flex: 1 } }>{ title }</Heading>

						<Menu position="bottom-end">
							<Menu.Target />
							<Menu.Dropdown>
								<Menu.Link href={ Routes.editUserGroup(user_group.slug) } icon={ <EditIcon /> }>
								Edit
								</Menu.Link>
							</Menu.Dropdown>
						</Menu>
					</Flex>

					<Table.TableProvider
						selectable
						hideable
						model='user'
						rows={ user_group.users }
					>
						<UsersTable />
					</Table.TableProvider>
				</Container>
			</Section>
		</Page>
	)
}

export default ShowUser
