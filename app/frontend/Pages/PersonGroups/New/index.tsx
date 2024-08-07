import React from 'react'
import { Title, Page, Section } from '@/Components'
import GroupForm from '../Form'
import { Routes } from '@/lib'

interface NewGroupProps {
	person_group: Schema.PersonGroupsFormData
}

const New = ({ ...data }: NewGroupProps) => {
	const title = 'New People Group'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Groups', href: Routes.personGroups() },
			{ title: 'New People Group', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<GroupForm to={ Routes.personGroups() } { ...data } />
			</Section>
		</Page>
	)
}

export default New
