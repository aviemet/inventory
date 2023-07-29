import React from 'react'
import {
	Form,
	TextInput,
	Submit,
} from '@/Components/Form'
import { DepartmentsDropdown, PeopleDropdown } from '@/Components/Dropdowns'
import { type UseFormProps } from 'use-inertia-form'

type TUserFormData = {
	user: Schema.UsersFormData
}

export interface IUserFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TUserFormData>) => boolean|void
	user: Schema.UsersFormData
}

const UserForm = ({ to, method = 'post', onSubmit, user }: IUserFormProps) => {

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
