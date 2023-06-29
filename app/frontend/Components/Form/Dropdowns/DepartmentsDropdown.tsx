import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { Routes } from '@/lib'
import DepartmentsForm from '@/Pages/Departments/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'
import { isEmpty } from 'lodash'
import { getDepartmentsAsOptions } from '@/queries/departments'

interface IDepartmentsDropdown extends IDropdownWithModalButton {
	departments: Schema.DepartmentsOptions[]
	locations: Schema.LocationsOptions[]
}

const DepartmentsDropdown = ({ label = 'Department', name = 'department_id', ...props }: IDepartmentsDropdown) => {
	const { data, isStale, refetch } = getDepartmentsAsOptions({ enabled: false })

	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ data }
			onDropdownOpen={ () => { if(isEmpty(data) || isStale) refetch() } }
			newForm={ <DepartmentsForm
				to={ Routes.apiDepartments() }
			/> }
			{ ...props }
		/>
	)
}

export default DepartmentsDropdown
