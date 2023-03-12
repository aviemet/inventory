import React from 'react'
import { Heading, Page, Section } from '@/Components'
import GroupForm from '../Form'
import { Routes } from '@/lib'

interface INewGroupProps {
	user_group: Schema.UserGroup
}

const New = ({ ...data }: INewGroupProps) => {
	const title = 'New User Group'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Groups', href: Routes.userGroups() },
			{ title: 'New User Group' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<GroupForm to={ Routes.userGroups() } { ...data } />
			</Section>
		</Page>
	)
}

export default New
