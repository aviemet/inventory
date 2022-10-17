import React from 'react'
import { Heading, Page, Section } from '@/Components'
import AccessoryForm from '../Form'
import { Routes } from '@/lib'

interface INewDepartmentProps {
	department: Partial<Schema.Department>
	locations: Schema.Location[]
}

const NewDepartment = ({ ...data }: INewDepartmentProps) => {
	const title = 'New Department'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Departments', href: Routes.departments() },
			{ title: 'New Department' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<AccessoryForm to={ Routes.departments() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewDepartment
