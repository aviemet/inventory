import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import PersonForm from '../Form'
import { Routes } from '@/lib'

interface INewPersonProps {
	person: Schema.Person
	departments: Schema.Department[]
	people: Schema.Person[]
}

const New = ({ ...data }: INewPersonProps) => {
	const title = 'New Person'

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title }</h1>

				<PersonForm to={ Routes.people() } { ...data } />
			</Section>
		</>
	)
}

export default New
