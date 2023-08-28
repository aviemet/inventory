import React from 'react'
import { Form, TextInput, Textarea, Submit } from '@/Components/Form'
import { LocationsDropdown } from '@/Components/Dropdowns'
import { type UseFormProps } from 'use-inertia-form'
import { coerceArray } from '@/lib'

type TDepartmentForData = {
	department: Schema.DepartmentsFormData
}

export interface IDepartmentFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TDepartmentForData>) => boolean|void
	department?: Schema.DepartmentsFormData
}

const emptyDepartment: Schema.DepartmentsFormData = {
	name: '',
	location_id: undefined,
	notes: '',
}

const DepartmentForm = ({ to, method = 'post', onSubmit, department = emptyDepartment }: IDepartmentFormProps) => {

	return (
		<Form
			model="department"
			data={ { department } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<LocationsDropdown initialData={ coerceArray(department?.location) } />

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ department.id ? 'Update' : 'Create' } Department
			</Submit>

		</Form>
	)
}

export default React.memo(DepartmentForm)
