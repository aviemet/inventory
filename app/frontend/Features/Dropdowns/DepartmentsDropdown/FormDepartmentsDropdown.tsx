import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Routes } from '@/lib'
import DepartmentsForm from '@/Pages/Departments/Form'
import { isEmpty } from 'lodash'
import { useGetDepartmentsAsOptions } from '@/queries/departments'
import { type FormAsyncDropdown } from '..'

interface DepartmentsDropdownProps extends Omit<FormAsyncDropdown<Schema.DepartmentsOptions>, 'name'> {
	name?: string
}

const DepartmentsDropdown = forwardRef<HTMLInputElement, DepartmentsDropdownProps>((
	{ label = 'Department', name = 'department_id', initialData, value, ...props },
	ref,
) => {
	const { data, isStale, refetch } = useGetDepartmentsAsOptions({
		enabled: value !== undefined,
		initialData,
	})

	return (
		<FormSelect
			ref={ ref }
			label={ label }
			name={ name }
			options={ !data ? [] : data.map(department => ({
				label: department.name!,
				value: String(department.id),
			})) }
			onDropdownOpen={ () => {
				if(isEmpty(data) || isStale) refetch()
			} }
			searchable
			clearable
			value={ value }
			newForm={
				<DepartmentsForm
					to={ Routes.apiDepartments() }
				/>
			}
			{ ...props }
		/>
	)
})

export default DepartmentsDropdown
