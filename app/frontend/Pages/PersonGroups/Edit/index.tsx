import React from 'react'
import { Heading, Page, Section } from '@/Components'
import GroupForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateGroupProps{
	person_group: Schema.PersonGroupsEdit
	people: Schema.Person[]
}

const EditGroup = ({ person_group, ...models }: IUpdateGroupProps) => {
	const title = `Edit ${person_group.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'People', href: Routes.people() },
			{ title: 'Groups', href: Routes.personGroups() },
			{ title: person_group.name!, href: Routes.personGroup(person_group.slug) },
			{ title: 'Edit' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<GroupForm to={ Routes.personGroup(person_group.slug) } method="patch" person_group={ person_group } { ...models } />
			</Section>
		</Page>
	)
}

export default EditGroup
