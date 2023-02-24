import React from 'react'
import { Form, TextInput, Textarea, Submit } from '@/Components/Form'
import { LocationsDropdown } from '@/Components/Form/Dropdowns'
import { type UseFormProps } from 'use-inertia-form'

export interface IDepartmentFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps) => boolean|void
	department?: Partial<Schema.Department>
	locations: Schema.Location[]
}

const emptyDepartment: Partial<Schema.Department> = {
	name: '',
	location_id: undefined,
}

const DepartmentForm = ({ to, method = 'post', onSubmit, department = emptyDepartment, locations }: IDepartmentFormProps) => {

	return (
		<Form
			model="department"
			data={ { department } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<LocationsDropdown locations={ locations } />

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ department.id ? 'Update' : 'Create' } Department
			</Submit>

		</Form>
	)
}

export default React.memo(DepartmentForm)
