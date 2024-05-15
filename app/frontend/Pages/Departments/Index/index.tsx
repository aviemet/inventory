import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Features'
import { NewIcon } from '@/Components/Icons'
import DepartmentsTable from '../Table'

interface IDepartmentsIndexProps {
	departments: Schema.DepartmentsIndex[]
	pagination: Schema.Pagination
}

const DepartmentsIndex = ({ departments, pagination }: IDepartmentsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Departments"
			model="departments"
			rows={ departments }
			pagination={ pagination }
			deleteRoute={ Routes.departments() }
			menuOptions={ [
				{ label: 'New Department', href: Routes.newDepartment(), icon: NewIcon },
			] }
		>
			<DepartmentsTable />
		</IndexPageTemplate>
	)
}

export default DepartmentsIndex
