import React from 'react'
import { Heading, Page, Section } from '@/Components'
import DepartmentForm from '../Form'
import { Routes } from '@/lib'

interface IEditDepartmentProps{
	department: Schema.DepartmentsEdit
}

const EditDepartment = ({ department }: IEditDepartmentProps) => {
	const title = `Edit ${department.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Departments', href: Routes.departments() },
			{ title: department.name!, href: Routes.department(department) },
			{ title: 'Edit Department' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<DepartmentForm to={ Routes.department(department) } method="patch" department={ department } />
			</Section>
		</Page>
	)
}

export default EditDepartment
