import React from 'react'
import { Heading, Page, Section } from '@/Components'
import NewPersonForm from './Form'
import { Routes } from '@/lib'

interface INewPersonProps {
	person: Schema.PeopleFormData
	departments: Schema.DepartmentsOptions[]
	people: Schema.PeopleOptions[]
	locations: Schema.LocationsOptions[]
}

const New = ({ ...data }: INewPersonProps) => {
	const title = 'New Person'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'People', href: Routes.people() },
			{ title: 'New Person' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<NewPersonForm to={ Routes.people() } { ...data } />
			</Section>
		</Page>
	)
}

export default New
