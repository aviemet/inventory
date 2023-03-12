import React from 'react'
import { Table, Container, Section, Heading, Page } from '@/Components'
import { Routes } from '@/lib'
import UsersTable from '@/Pages/Users/Table'

interface IShowUserProps {
	user_group: Schema.UserGroup
}

const ShowUser = ({ user_group }: IShowUserProps) => {
	const title = `${user_group.name} User Group`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Users', href: Routes.users() },
			{ title: 'Groups', href: Routes.userGroups() },
			{ title },
		] }>
			<Section>
				<Container>
					<Heading>{ title }</Heading>

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
