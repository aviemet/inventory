import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Components/Layout'
import { NewIcon } from '@/Components/Icons'
import DepartmentsTable from '../Table'

interface IDepartmentsIndexProps {
	departments: Schema.DepartmentWithCounts[]
	pagination: Schema.Pagination
}

const DepartmentsIndex = ({ departments, pagination }: IDepartmentsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Departments"
			model="departments"
			rows={ departments }
			pagination={ pagination }
			menuOptions={ [
				{ label: 'New Department', href: Routes.newDepartment(), icon: NewIcon },
			] }
		>
			<DepartmentsTable />
		</IndexPageTemplate>
	)
}

export default DepartmentsIndex
