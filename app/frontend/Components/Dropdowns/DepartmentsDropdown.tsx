import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
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
		options: !data ? [] : data.map(department => ({
			label: department.name,
			value: String(department.id),
		})),
		onDropdownOpen: () => {
			if(isEmpty(data) || isStale) refetch()
		},
		searchable: true,
		clearable: true,
		...props,
	}

	if(inFormContext()) {
		return (
			<FormSelect
				newForm={ <DepartmentsForm to={ Routes.apiDepartments() } /> }
				{ ...commonProps }
			/>
		)
	}

	return <InputSelect { ...commonProps } />
})

export default DepartmentsDropdown
