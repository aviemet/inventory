import React from 'react'
import { Heading, Page, Section } from '@/Components'
import EditPersonForm from './Form'
import { Routes } from '@/lib'

interface IUpdatePersonProps{
	person: Schema.PeopleEdit
	departments: Schema.DepartmentsOptions[]
	people: Schema.PeopleOptions[]
	locations: Schema.LocationsOptions[]
}

const New = ({ person, ...models }: IUpdatePersonProps) => {
	const title = `Edit ${person.first_name} ${person.last_name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'People', href: Routes.person(person) },
			{ title: `${person.first_name} ${person.last_name}`, href: Routes.person(person) },
			{ title: 'Edit Person' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<EditPersonForm
					to={ Routes.person(person) }
					method="patch"
					person={ person }
					{ ...models }
				/>
			</Section>
		</Page>
	)
}

export default New
