import React from 'react'
import { Heading, Page, Section } from '@/Components'
import GroupForm from '../Form'
import { Routes } from '@/lib'

interface INewGroupProps {
	person_group: Schema.PersonGroupsFormData
}

const New = ({ ...data }: INewGroupProps) => {
	const title = 'New People Group'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Groups', href: Routes.personGroups() },
			{ title: 'New People Group' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<GroupForm to={ Routes.personGroups() } { ...data } />
			</Section>
		</Page>
	)
}

export default New
