import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import DepartmentForm from '../Form'
import { Routes } from '@/lib'


interface IEditDepartmentProps{
	department: Schema.Department
	locations: Schema.Location[]
}

const EditDepartment = ({ department, ...models }: IEditDepartmentProps) => {
	const title = `Edit ${department.name}`

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title }</h1>

				<DepartmentForm to={ Routes.department(department.slug) } method="patch" department={ department } { ...models } />
			</Section>
		</>
	)
}

export default EditDepartment
