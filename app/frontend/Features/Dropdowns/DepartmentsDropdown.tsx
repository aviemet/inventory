import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { Routes, useInFormContext } from '@/lib'
import DepartmentsForm from '@/Pages/Departments/Form'
import { isEmpty } from 'lodash'
import { useGetDepartmentsAsOptions } from '@/queries/departments'
import { type AsyncDropdown } from '.'

interface IDepartmentsDropdown extends AsyncDropdown<Schema.DepartmentsOptions> {}

const DepartmentsDropdown = forwardRef<HTMLInputElement, IDepartmentsDropdown>((
	{ label = 'Department', name = 'department_id', initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetDepartmentsAsOptions({
		enabled: value !== undefined,
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
		value,
		...props,
	}

	if(useInFormContext()) {
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