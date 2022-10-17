import React from 'react'
import { Heading, Page, Section } from '@/Components'
import DepartmentForm from '../Form'
import { Routes } from '@/lib'

interface IEditDepartmentProps{
	department: Schema.Department
	locations: Schema.Location[]
}

const EditDepartment = ({ department, ...models }: IEditDepartmentProps) => {
	const title = `Edit ${department.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Departments', href: Routes.departments() },
			{ title: department.name!, href: Routes.department(department) },
			{ title: 'Edit Department' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<DepartmentForm to={ Routes.department(department.slug) } method="patch" department={ department } { ...models } />
			</Section>
		</Page>
	)
}

export default EditDepartment
