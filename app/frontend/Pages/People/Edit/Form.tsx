import React, { useCallback } from 'react'
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
import { useBooleanToggle } from '@/Components/Hooks'
import { DepartmentsDropdown } from '@/Components/Form/Dropdowns'
import { type UseFormProps } from 'use-inertia-form'
import PeopleDropdown from '@/Components/Form/Dropdowns/PeopleDropdown'
// import { ContactForm } from '@/Layouts/AppLayout/Components/Contactable'


type TPersonFormData = {
	person: Schema.PeopleEdit
}

const emptyUser: Schema.UsersFormData = {
	email: '',
	password: '',
	password_confirmation: '',
	active: true,
}

export interface IPersonFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TPersonFormData>) => boolean|void
	person: Schema.PeopleEdit
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
	const [loginEnabled, toggleLoginEnabled] = useBooleanToggle(!!person.user)

	const handleToggleLogin = (form: UseFormProps<TPersonFormData>) => {
		if(!loginEnabled) {
			handleEnableLogin(form)
		} else {
			handleDisableLogin(form)
		}
		toggleLoginEnabled()
	}

	const handleEnableLogin = (form: UseFormProps<TPersonFormData>) => {
		const userData = person.user ?? emptyUser
		form.setData('person.user', userData)
	}

	const handleDisableLogin = (form: UseFormProps<TPersonFormData>) => {
		form.unsetData('person.user')
	}

	const personData = useCallback((): TPersonFormData => {
		const data = { person: { ...person } }
		if(data.person.user) {
			data.person.user.password = ''
			data.person.user.password_confirmation = ''
		}

		return data
	}, [person])

	const handleSubmit = (form: UseFormProps<TPersonFormData>) => {
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

	const handleChange = ({ data, getData, clearErrors }: UseFormProps<TPersonFormData>) => {
		const password = getData('person.user.')
		const checkPassword = getData('person.user.check_password')

		if(password === checkPassword) {
			clearErrors('person.user.check_password')
			return
		}
	}

	const handlePasswordBlur = (password: string, { getData, setError }: UseFormProps<TPersonFormData>) => {
		const checkPassword = getData('person.user.check_password')

		if(checkPassword !== '' && password !== checkPassword) {
			setError('person.user.check_password', 'Passwords must match')
		}
	}

	const handleCheckPasswordBlur = (checkPassword: string, { getData, setError }: UseFormProps<TPersonFormData>) => {
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

			<FormConsumer>{ (form: UseFormProps<TPersonFormData>) => (
				<CheckboxInput
					label="Login Enabled"
					checked={ loginEnabled }
					onChange={ () => handleToggleLogin(form) }
				/>
			) }</FormConsumer>

			{ loginEnabled && <FormGroup legend="Login Details">
				<FieldsFor model="user">

					<TextInput name="email" label="Email" />

					<PasswordInput name="password" label={ `${person.id ? 'New' : ''} Password` } onBlur={ handlePasswordBlur } />
					<PasswordInput name="password_confirmation" label="Check Password" onBlur={ handleCheckPasswordBlur } />

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
