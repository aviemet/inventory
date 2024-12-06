import React, { forwardRef } from 'react'
import { Select as InputSelect } from '@/Components/Inputs'
import { isEmpty } from 'lodash'
import { useGetDepartmentsAsOptions } from '@/queries/departments'
import { type AsyncDropdown } from '..'

interface DepartmentsDropdownProps extends AsyncDropdown<Schema.DepartmentsOptions> {}

const DepartmentsDropdown = forwardRef<HTMLInputElement, DepartmentsDropdownProps>((
	{ label = 'Department', name = 'department_id', initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetDepartmentsAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return <InputSelect
		ref={ ref }
		label={ label }
		name={ name }
		options={ !data
			? []
			: data.map(department => ({
				label: department.name!,
				value: String(department.id),
			})) }
		onDropdownOpen={ () => {
			if(isEmpty(data) || isStale) refetch()
		} }
		searchable
		clearable
		value={ value }
		{ ...props } />
})

export default DepartmentsDropdown
