import React, { useCallback } from 'react'
import {
	Form,
	TextInput,
	SearchableDropdown,
	Submit,
	FieldsFor,
	FormGroup,
	PasswordInput,
	Checkbox,
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

	const personData = useCallback(() => {
		const data = { person: { ...person } }
		data.person.user!.password = ''
		data.person.user!.check_password = ''
		return data
	}, [person])

	const handleSubmit = (form: UseFormProps) => {
		const password = form.getData('person.user.password')
		const checkPassword = form.getData('person.user.check_password')

		if(password !== checkPassword) {
			form.setError('person.user.check_password', 'Passwords must match')
			return false
		}

		if(password === '') {
			form.transform(data => {
				const strippedData = { ...data }
				delete strippedData.person.user.password
				delete strippedData.person.user.check_password
				console.log({ strippedData })
				return strippedData
			})
		}
		return false
		if(onSubmit) onSubmit(form)
	}

	const handleChange = ({ getData, setData, setError, clearErrors }: UseFormProps) => {
		const password = getData('person.user.password')
		const checkPassword = getData('person.user.check_password')

		if(password === checkPassword) {
			clearErrors('person.user.check_password')
			return
		}
	}

	const handlePasswordBlur = (password: string, { getData, setData, setError, clearErrors }: UseFormProps) => {
		const checkPassword = getData('person.user.check_password')

		if(checkPassword !== '' && password !== checkPassword) {
			setError('person.user.check_password', 'Passwords must match')
		}
	}

	const handleCheckPasswordBlur = (checkPassword: string, { getData, setData, setError, clearErrors }: UseFormProps) => {
		const password = getData('person.user.password')

		if(password !== checkPassword) {
			setError('person.user.check_password', 'Passwords must match')
		}
	}

	return (
		<Form
			model="person"
			data={ personData() }
			to={ to }
			method={ method }
			onSubmit={ handleSubmit }
			onChange={ handleChange }
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

			<FormGroup legend="Login Details">
				<FieldsFor model="user">

					<TextInput name="email" label="Email" />

					<PasswordInput name="password" label={ `${person.id ? 'New' : ''} Password` } onBlur={ handlePasswordBlur } />
					<PasswordInput name="check_password" label="Check Password" onBlur={ handleCheckPasswordBlur } />

					<Checkbox name="active" label="Active" />

				</FieldsFor>
			</FormGroup>

			<Submit>
				{ person.id ? 'Update' : 'Create' } Person
			</Submit>
		</Form>
	)
}

export default React.memo(PersonForm)
