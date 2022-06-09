import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import PersonForm from '../Form'
import { Routes } from '@/lib'

interface IUpdatePersonProps{
	person: Schema.Person
	departments: Schema.Department[]
	people: Schema.Person[]
}

const New = ({ person, ...models }: IUpdatePersonProps) => {
	const title = `Edit ${person.first_name}`

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title }</h1>

				<PersonForm to={ Routes.people(person) } method="patch" person={ person } { ...models } />
			</section>
		</>
	)
}

export default New
