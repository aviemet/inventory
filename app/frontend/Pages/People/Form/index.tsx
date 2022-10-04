import React from 'react'
import {
	Form,
	Input,
	SearchableDropdown,
	Submit,
} from '@/Components/Form'
import { Inertia } from '@inertiajs/inertia'
import { DepartmentsDropdown } from '@/Components/Form/Dropdowns'

export interface IPersonFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
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
			<Input name="first_name" label="First Name" required autoFocus />

			<Input name="middle_name" label="Middle Name" required  />

			<Input name="last_name" label="Last Name" required  />

			<Input name="employee_number" label="Employee Number" required  />

			<DepartmentsDropdown
				departments={ departments }
				locations={ locations }
				name="department_id"
				required
			/>

			<Input name="job_title" label="Job Title" required  />

			<SearchableDropdown
				label="Manager"
				name="manager_id"
				options={ people }
				filterMatchKeys={ ['first_name', 'last_name'] }
				onOpen={ () => Inertia.reload({ only: ['people'] }) }
			/>

			<Submit>
				{ person.id ? 'Update' : 'Create' } Person
			</Submit>
		</Form>
	)
}

export default React.memo(PersonForm)
