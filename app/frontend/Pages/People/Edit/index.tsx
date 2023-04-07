import React from 'react'
import { Heading, Page, Section } from '@/Components'
import PersonForm from './Form'
import { Routes } from '@/lib'

interface IUpdatePersonProps{
	person: Schema.Person
	departments: Schema.Department[]
	people: Schema.Person[]
	locations: Schema.Location[]
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

				<PersonForm
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
