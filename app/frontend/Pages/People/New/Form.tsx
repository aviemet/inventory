import React from 'react'
import { Grid } from '@/Components'
import {
	Form,
	TextInput,
	Submit,
	FieldsFor,
	Checkbox,
	FormConsumer,
} from '@/Components/Form'
import { FormPeopleDropdown, FormDepartmentsDropdown } from '@/Features/Dropdowns'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type PersonFormData = {
	person: Schema.PeopleFormData
}

export interface PersonFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<PersonFormData>) => boolean | void
	person: Schema.PeopleFormData
}

const PersonForm = ({
	to,
	method = 'post',
	onSubmit,
	person,
}: PersonFormProps) => {

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
			<Grid>
				<Grid.Col>
					<TextInput name="first_name" label="First Name" required />
				</Grid.Col>

				<Grid.Col>
					<TextInput name="middle_name" label="Middle Name" />
				</Grid.Col>

				<Grid.Col>
					<TextInput name="last_name" label="Last Name" required />
				</Grid.Col>

				<Grid.Col>
					<TextInput name="employee_number" label="Employee #" />
				</Grid.Col>

				<Grid.Col>
					<FormDepartmentsDropdown />
				</Grid.Col>

				<Grid.Col>
					<TextInput name="job_title" label="Job Title" />
				</Grid.Col>

				<Grid.Col>
					<FormPeopleDropdown
						label="Manager"
						name="manager_id"
					/>
				</Grid.Col>

				<Grid.Col>
					<FormConsumer>{ ({ data }: UseFormProps<PersonFormData>) => (
						<TextInput
							name="contact.emails[0].email"
							label="Email"
							required={ data.person.user?.active }
							errorKey={ data.person.user?.active ? 'user.password' : undefined }
						/>
					) }</FormConsumer>
				</Grid.Col>

				<Grid.Col>
					<FieldsFor model="user">
						<Checkbox name="active" label="Login Enabled" />
					</FieldsFor>
				</Grid.Col>

				<Grid.Col>
					<Submit>Create Person</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default PersonForm
