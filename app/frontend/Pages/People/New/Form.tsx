import React from 'react'
import {
	Form,
	TextInput,
	Submit,
	FieldsFor,
	Checkbox,
	FormConsumer,
} from '@/Components/Form'
import { DepartmentsDropdown } from '@/Components/Form/Dropdowns'
import { type UseFormProps } from 'use-inertia-form'
import PeopleDropdown from '@/Components/Form/Dropdowns/PeopleDropdown'

type PersonFormData = {
	person: Schema.Person
}

export interface IPersonFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<PersonFormData>) => boolean|void
	person: Schema.Person
	departments: Schema.Department[]
	people: Schema.Person[]
	locations: Schema.Location[]
}

const PersonForm = ({
	to,
	method = 'post',
	onSubmit,
	person,
	departments,
	people,
	locations,
}: IPersonFormProps) => {
	return (
		<Form
			model="person"
			data={ { person } }
			to={ to }
			method={ method }
			onSubmit={ ({ transform }) => transform(data => {
				if(data.person.user?.active) {
					data.person.user.email = data?.person?.contact?.emails?.[0].email || ''
				}
				return data
			}) }
		>
			<TextInput name="first_name" label="First Name" required autoFocus />

			<TextInput name="middle_name" label="Middle Name" />

			<TextInput name="last_name" label="Last Name" required />

			<TextInput name="employee_number" label="Employee #" />

			<DepartmentsDropdown
				departments={ departments }
				locations={ locations }
				name="department_id"
			/>

			<TextInput name="job_title" label="Job Title" required />

			<PeopleDropdown
				label="Manager"
				name="manager_id"
				people={ people }
			/>

			<FormConsumer>{ ({ data }) => (
				<TextInput name="contact.emails[0].email" label="Email" required={ data.person.user.active  } />
			) }</FormConsumer>

			<FieldsFor model="user">
				<Checkbox name="active" label="Login Enabled" />
			</FieldsFor>



			<Submit>Create Person</Submit>
		</Form>
	)
}

export default React.memo(PersonForm)
