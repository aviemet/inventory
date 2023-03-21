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
	FormConsumer,
} from '@/Components/Form'
import { Checkbox as CheckboxInput } from '@/Components/Inputs'
import { useBooleanToggle } from '@/Components/Hooks'
import { router } from '@inertiajs/react'
import { DepartmentsDropdown } from '@/Components/Form/Dropdowns'
import { type UseFormProps } from 'use-inertia-form'

type PersonFormData = {
	person: Schema.Person
}

const emptyUser: Partial<Schema.User> = {
	email: '',
	password: '',
	check_password: '',
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

	const personData = useCallback((): PersonFormData => {
		const data = { person: { ...person } }
		if(data.person.user) {
			data.person.user.password = ''
			data.person.user.check_password = ''
		}
		return data
	}, [person])

	const handleSubmit = (form: UseFormProps<PersonFormData>) => {
		const password = form.getData('person.user.password')
		const checkPassword = form.getData('person.user.check_password')

		if(password !== checkPassword) {
			form.setError('person.user.check_password', 'Passwords must match')
			return false
		}

		if(password === '') {
			form.transform(data => {
				if(data.person.user) {
					delete data.person.user.password
					delete data.person.user.check_password
				}
				return data
			})
		}

		if(onSubmit) onSubmit(form)
	}

	const handleChange = ({ data, getData, clearErrors }: UseFormProps<PersonFormData>) => {
		const password = getData('person.user.password')
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

			<FormConsumer>{ form => (
				<CheckboxInput
					label="Login Enabled"
					checked={ loginEnabled }
					onChange={ () => handleToggleLogin(form) }
				/>) }
			</FormConsumer>

			{ loginEnabled && <FormGroup legend="Login Details">
				<FieldsFor model="user">

					<TextInput name="email" label="Email" />

					<PasswordInput name="password" label={ `${person.id ? 'New' : ''} Password` } onBlur={ handlePasswordBlur } />
					<PasswordInput name="check_password" label="Check Password" onBlur={ handleCheckPasswordBlur } />

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
