import React, { useMemo } from 'react'
import {
	Form,
	TextInput,
	Submit,
	FieldsFor,
	FormGroup,
	PasswordInput,
	Checkbox,
	FormConsumer,
} from '@/Components/Form'
import { Checkbox as CheckboxInput } from '@/Components/Inputs'
import { useBooleanToggle } from '@/lib/hooks'
import { FormDepartmentsDropdown } from '@/Features/Dropdowns'
import PeopleDropdown from '@/Features/Dropdowns/PeopleDropdown'
import { coerceArray } from '@/lib'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type PersonFormData = {
	person: Schema.PeopleEdit
}

const emptyUser: Schema.UsersFormData = {
	email: '',
	password: '',
	password_confirmation: '',
	active: true,
}

export interface PersonFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<PersonFormData>) => boolean|void
	person: Schema.PeopleEdit
}

const PersonForm = ({
	to,
	method = 'post',
	onSubmit,
	person,
}: PersonFormProps) => {
	/**
	 * Show / Hide login details with "login enabled" checkbox
	 */
	const [loginEnabled, toggleLoginEnabled] = useBooleanToggle(!!person.user)

	const handleToggleLogin = (form: UseFormProps<PersonFormData>) => {
		if(!loginEnabled) {
			handleEnableLogin(form)
		} else {
			handleDisableLogin(form)
		}
		toggleLoginEnabled()
	}

	const handleEnableLogin = (form: UseFormProps<PersonFormData>) => {
		const userData = person.user ?? emptyUser
		form.setData('person.user', userData)
	}

	const handleDisableLogin = (form: UseFormProps<PersonFormData>) => {
		form.unsetData('person.user')
	}

	/**
	 * Manage password check validation
	 */
	const handleFormChange = ({ getData, clearErrors }: UseFormProps<PersonFormData>) => {
		const password = getData('person.user.')
		const checkPassword = getData('person.user.check_password')

		if(password === checkPassword) {
			clearErrors('person.user.check_password')
			return
		}
	}

	const handlePasswordBlur = (password: string, { getData, setError }: UseFormProps<PersonFormData>) => {
		const checkPassword = getData('person.user.check_password')

		if(checkPassword !== '' && password !== checkPassword) {
			setError('person.user.check_password', 'Passwords must match')
		}
	}

	const handleCheckPasswordBlur = (checkPassword: string, { getData, setError }: UseFormProps<PersonFormData>) => {
		const password = getData('person.user.password')

		if(password !== checkPassword) {
			setError('person.user.check_password', 'Passwords must match')
		}
	}

	/**
	 * Shape data before submitting
	 */
	const handleSubmit = (form: UseFormProps<PersonFormData>) => {
		const password = form.getData('person.user.password')
		const checkPassword = form.getData('person.user.check_password')

		if((password && password !== '') && (password !== checkPassword)) {
			form.setError('person.user.check_password', 'Passwords must match')
			return false
		}

		if(password === '') {
			form.transform(data => {
				if(data.person.user) {
					delete data.person.user.password
					delete data.person.user.password_confirmation
				}
				return data
			})
		}

		if(onSubmit) onSubmit(form)
	}

	return (
		<Form
			model="person"
			data={ useMemo((): PersonFormData => {
				const data = { person: { ...person } }
				if(data.person.user) {
					data.person.user.password = ''
					data.person.user.password_confirmation = ''
				}
				return data
			}, [person]) }
			to={ to }
			method={ method }
			onSubmit={ handleSubmit }
			onChange={ handleFormChange }
		>
			<TextInput name="first_name" label="First Name" required autoFocus />

			<TextInput name="middle_name" label="Middle Name" />

			<TextInput name="last_name" label="Last Name" required />

			<TextInput name="employee_number" label="Employee #" />

			<FormDepartmentsDropdown
				name="department_id"
				initialData={ coerceArray(person?.department) }
			/>

			<TextInput name="job_title" label="Job Title" required />

			<PeopleDropdown
				label="Manager"
				name="manager_id"
				initialData={ coerceArray(person?.manager) }
			/>

			<FormConsumer>
				{ (form: UseFormProps<PersonFormData>) => (
					<CheckboxInput
						label="Login Enabled"
						checked={ loginEnabled }
						onChange={ () => handleToggleLogin(form) }
					/>
				) }
			</FormConsumer>

			{ loginEnabled && <FormGroup legend="Login Details">
				<FieldsFor model="user">

					<TextInput name="email" label="Email" />

					<PasswordInput
						name="password"
						label={ `${person.id ? 'New' : ''} Password` }
						onBlur={ handlePasswordBlur }
						clearErrorsOnChange={ false }
					/>
					<PasswordInput
						name="password_confirmation"
						label="Check Password"
						onBlur={ handleCheckPasswordBlur }
						clearErrorsOnChange={ false }
					/>

					<Checkbox name="active" label="Active" />

				</FieldsFor>
			</FormGroup> }

			<Submit>
				{ person.id ? 'Update' : 'Create' } Person
			</Submit>
		</Form>
	)
}

export default React.memo(PersonForm)
