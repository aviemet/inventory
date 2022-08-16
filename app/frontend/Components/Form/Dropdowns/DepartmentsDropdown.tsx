import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import DepartmentsForm from '@/Pages/Departments/Form'

interface IDepartmentsDropdown extends IDropdownWithModalButton {
	departments: Schema.Department[]
	locations: Schema.Location[]
	categories: Schema.Category[]
}

const DepartmentsDropdown = ({ label = 'Department', name = 'model_id',  departments, locations }: IDepartmentsDropdown) => {
	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			required
			options={ departments }
			fetchOnOpen="department"
			newForm={ <DepartmentsForm
				to={ Routes.apiDepartments() }
				locations={ locations }
			/> }
		/>
	)
}

export default DepartmentsDropdown
