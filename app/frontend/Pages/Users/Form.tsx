import React from 'react'
import {
	Form,
	TextInput,
	Submit,
} from '@/Components/Form'
import { DepartmentsDropdown, PeopleDropdown } from '@/Features/Dropdowns'
import { type UseFormProps } from 'use-inertia-form'

type UserFormData = {
	user: Schema.UsersFormData
}

export interface UserFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<UserFormData>) => boolean|void
	user: Schema.UsersFormData
}

const UserForm = ({ to, method = 'post', onSubmit, user }: UserFormProps) => {

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
				name="department_id"
				required
			/>

			<TextInput name="job_title" label="Job Title" required  />

			<PeopleDropdown
				label="Manager"
				name="manager_id"
			/>

			<Submit>
				{ user.id ? 'Update' : 'Create' } User
			</Submit>
		</Form>
	)
}

export default React.memo(UserForm)
