import React from 'react'
import { Heading, Page, Section } from '@/Components'
import AccessoryForm from '../Form'
import { Routes } from '@/lib'

interface NewDepartmentProps {
	department: Schema.DepartmentsFormData
}

const NewDepartment = ({ department }: NewDepartmentProps) => {
	const title = 'New Department'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Departments', href: Routes.departments() },
			{ title: 'New Department' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<AccessoryForm to={ Routes.departments() } department={ department } />
			</Section>
		</Page>
	)
}

export default NewDepartment
