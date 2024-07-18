import React from 'react'
import { Title, Page, Section } from '@/Components'
import DepartmentForm from '../Form'
import { Routes } from '@/lib'

interface EditDepartmentProps{
	department: Schema.DepartmentsEdit
}

const EditDepartment = ({ department }: EditDepartmentProps) => {
	const title = `Edit ${department.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Departments', href: Routes.departments() },
			{ title: department.name, href: Routes.department(department) },
			{ title: 'Edit Department', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<DepartmentForm to={ Routes.department(department) } method="patch" department={ department } />
			</Section>
		</Page>
	)
}

export default EditDepartment
