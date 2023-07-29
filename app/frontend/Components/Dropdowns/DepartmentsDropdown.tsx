import React, { forwardRef } from 'react'
import { SearchableDropdown as FormDropdown } from '@/Components/Form'
import { SearchableDropdown as InputDropdown } from '@/Components/Inputs'
import { Routes, inFormContext } from '@/lib'
import DepartmentsForm from '@/Pages/Departments/Form'
import { isEmpty } from 'lodash'
import { getDepartmentsAsOptions } from '@/queries/departments'
import { type IAsyncDropdown } from '.'

interface IDepartmentsDropdown extends IAsyncDropdown<Schema.DepartmentsOptions> {}

const DepartmentsDropdown = forwardRef<HTMLInputElement, IDepartmentsDropdown>((
	{ label = 'Department', name = 'department_id', initialData, ...props },
	ref,
) => {
	const { data, isStale, refetch } = getDepartmentsAsOptions({
		enabled: false,
		initialData,
	})

	const commonProps = {
		ref,
		label,
		name,
		options: data,
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		...props,
	}

	if(inFormContext()) {
		return (
			<FormDropdown
				newForm={ <DepartmentsForm to={ Routes.apiDepartments() } /> }
				{ ...commonProps }
			/>
		)
	}

	return <InputDropdown { ...commonProps } />
})

export default DepartmentsDropdown
