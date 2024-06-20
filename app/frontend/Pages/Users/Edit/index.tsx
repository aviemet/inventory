import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import UserForm from '../Form'

interface UpdateUserProps{
	user: Schema.UsersEdit
}

const EditUser = ({ user }: UpdateUserProps) => {
	const title = 'Edit User'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Users', href: Routes.tickets() },
			{ title: user.email, href: Routes.user(user) },
			{ title: 'Edit User', href: window.location.href },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<UserForm
					to={ Routes.user(user) }
					method="patch"
					user={ user }
				/>
			</Section>
		</Page>
	)
}

export default EditUser
