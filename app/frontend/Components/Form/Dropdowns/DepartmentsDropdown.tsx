import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import DepartmentsForm from '@/Pages/Departments/Form'

interface IDepartmentsDropdown extends IDropdownWithModalButton {
	departments: Schema.DepartmentsOptions[]
	locations: Schema.LocationsOptions[]
}

const DepartmentsDropdown = ({ label = 'Department', name = 'department_id',  departments, locations, ...props }: IDepartmentsDropdown) => {
	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ departments }
			filterMatchKeys={ ['name'] }
			fetchOnOpen="departments"
			newForm={ <DepartmentsForm
				to={ Routes.apiDepartments() }
				locations={ locations }
			/> }
			{ ...props }
		/>
	)
}

export default DepartmentsDropdown
