import React from 'react'
import { Heading, Page, Section } from '@/Components'
import PersonForm from '../Form'
import { Routes } from '@/lib'

interface INewPersonProps {
	person: Schema.Person
	departments: Schema.Department[]
	people: Schema.Person[]
	locations: Schema.Location[]
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

				<PersonForm to={ Routes.people() } { ...data } />
			</Section>
		</Page>
	)
}

export default New
