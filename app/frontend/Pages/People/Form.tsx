import React from 'react'
import {
	Form,
	TextInput,
	SearchableDropdown,
	Submit,
} from '@/Components/Form'
import { router } from '@inertiajs/react'
import { DepartmentsDropdown } from '@/Components/Form/Dropdowns'
import { type UseFormProps } from 'use-inertia-form'

export interface IPersonFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps) => boolean|void
	person: Schema.Person
	departments: Schema.Department[]
	people: Schema.Person[]
	locations: Schema.Location[]
}

const PersonForm = ({ to, method = 'post', onSubmit, person, departments, people, locations }: IPersonFormProps) => {

	return (
		<Form
			model="person"
			data={ { person } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="first_name" label="First Name" required autoFocus />

			<TextInput name="middle_name" label="Middle Name" required  />

			<TextInput name="last_name" label="Last Name" required  />

			<TextInput name="employee_number" label="Employee Number" required  />

			<DepartmentsDropdown
				departments={ departments }
				locations={ locations }
				name="department_id"
				required
			/>

			<TextInput name="job_title" label="Job Title" required  />

			<SearchableDropdown
				label="Manager"
				name="manager_id"
				options={ people }
				filterMatchKeys={ ['first_name', 'last_name'] }
				onOpen={ () => router.reload({ only: ['people'] }) }
			/>

			<Submit>
				{ person.id ? 'Update' : 'Create' } Person
			</Submit>
		</Form>
	)
}

export default React.memo(PersonForm)
