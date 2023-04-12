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

type TUserFormData = {
	user: Schema.UsersFormData
}

export interface IUserFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TUserFormData>) => boolean|void
	user: Schema.UsersFormData
	departments: Schema.DepartmentsOptions[]
	people: Schema.PeopleOptions[]
	locations: Schema.LocationsOptions[]
}

const UserForm = ({ to, method = 'post', onSubmit, user, departments, people, locations }: IUserFormProps) => {

	return (
		<Form
			model="user"
			data={ { user } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="first_name" label="First Name" required autoFocus />

			<TextInput name="middle_name" label="Middle Name" required  />

			<TextInput name="last_name" label="Last Name" required  />

			<TextInput name="employee_number" label="Employee #" required  />

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
				{ user.id ? 'Update' : 'Create' } User
			</Submit>
		</Form>
	)
}

export default React.memo(UserForm)
