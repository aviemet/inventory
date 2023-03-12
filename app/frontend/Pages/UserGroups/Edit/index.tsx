import React from 'react'
import { Heading, Page, Section } from '@/Components'
import GroupForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateGroupProps{
	user_group: Schema.UserGroup
	users: Schema.User[]
}

const EditGroup = ({ user_group, ...models }: IUpdateGroupProps) => {
	const title = `Edit ${user_group.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Users', href: Routes.users() },
			{ title: 'Groups', href: Routes.userGroups() },
			{ title: user_group.name!, href: Routes.userGroup(user_group.slug) },
			{ title: 'Edit Hardware' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<GroupForm to={ Routes.userGroup(user_group.slug) } method="patch" user_group={ user_group } { ...models } />
			</Section>
		</Page>
	)
}

export default EditGroup
