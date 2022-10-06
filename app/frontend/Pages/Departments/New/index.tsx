import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import AccessoryForm from '../Form'
import { Routes } from '@/lib'

interface INewDepartmentProps {
	department: Partial<Schema.Department>
	locations: Schema.Location[]
}

const NewDepartment = ({ ...data }: INewDepartmentProps) => {
	const title = 'New Department'

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title } for { user.active_company!.name }</h1>

				<AccessoryForm to={ Routes.departments() } { ...data } />
			</Section>
		</>
	)
}

export default NewDepartment
