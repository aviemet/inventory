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

type TPersonFormData = {
	person: Schema.PeopleFormData
}

export interface IPersonFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TPersonFormData>) => boolean|void
	person: Schema.PeopleFormData
	departments: Schema.DepartmentsOptions[]
	people: Schema.PeopleOptions[]
	locations: Schema.LocationsOptions[]
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
			onSubmit={ form => {
				form.transform(data => {
					if(data.person.user?.active) {
						data.person.user.email = data?.person?.contact?.emails?.[0].email || ''
					} else {
						delete data.person.user
					}
					return data
				})
				if(onSubmit) onSubmit(form)
			} }
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

			<TextInput name="job_title" label="Job Title" />

			<PeopleDropdown
				label="Manager"
				name="manager_id"
				people={ people }
			/>

			<FormConsumer>{ ({ data }: UseFormProps<TPersonFormData>) => (
				<TextInput
					name="contact.emails[0].email"
					label="Email"
					required={ data.person.user?.active }
					errorKey={ data.person.user?.active ? 'user.password' : undefined }
				/>
			) }</FormConsumer>

			<FieldsFor model="user">
				<Checkbox name="active" label="Login Enabled" />
			</FieldsFor>



			<Submit>Create Person</Submit>
		</Form>
	)
}

export default React.memo(PersonForm)
