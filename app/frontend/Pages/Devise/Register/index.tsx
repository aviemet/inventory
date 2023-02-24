import React from 'react'
import { Form, TextInput, PasswordInput, Submit, Field } from '@/Components/Form'
import { Routes } from '@/lib'
import { Heading, Tile } from '@/Components'
import { usePage } from '@inertiajs/react'
import { type UseFormProps } from 'use-inertia-form'

const firstRun = {
	heading: 'Create Admin User',
	description: 'Time to create your first user which  will be the admin for your inventory system',
}

const register = {
	heading: 'Sign Up',
	description: '',
}

const Register = () => {
	const { props } = usePage()

	const handleFormChange = ({ data }: UseFormProps) => {
		// console.log({ data })
	}

	const handlePasswordChange = (value: string|number, { data, errors, clearErrors }: UseFormProps) => {
		if(errors['user.password'] || errors['user.password_confirmation']) {
			if(data.user.password === data.user.password_confirmation) {
				clearErrors('user.password', 'user.password_confirmation')
			}
		}
	}

	const handleSubmit = ({ data, setError, errors, transform }: UseFormProps) => {
		if(data.user.password !== data.user.password_confirmation) {
			setError('user.password_confirmation', 'Passwords must match')
			return false
		}
	}

	const handleEmailBlur = (value: string|number, form: UseFormProps) => {
		// console.log({ value, form })
	}

	const content = props?.first_run ? firstRun : register

	// TODO: Disable submit until all inputs are valid. Async check for existing email address on input blur
	return (
		<Tile>
			<Form
				data={ {
					user: {
						email: '',
						password: '',
						password_confirmation: '',
					},
				} }
				model="user"
				to={ Routes.userRegistration() }
				onChange={ handleFormChange }
				onSubmit={ handleSubmit }
				grid={ false }
			>
				<Tile.Content>

					<div>
						<Heading>{ content.heading }</Heading>
						<p>{ content.description }</p>
					</div>

					<Field>
						<TextInput
							name="email"
							placeholder="Email"
							autoFocus
							autoComplete="Email"
							required
							onBlur={ handleEmailBlur }
						/>
					</Field>

					<Field>
						<PasswordInput
							name="password"
							placeholder="Password"
							autoComplete="new-password"
							required
							onChange={ handlePasswordChange }
						/>
					</Field>

					<Field>
						<PasswordInput
							name="password_confirmation"
							placeholder="Confirm Password"
							autoComplete="new-password"
							required
							onChange={ handlePasswordChange }
						/>
					</Field>

					<Field>
						<Submit className="large">Sign Up</Submit>
					</Field>

				</Tile.Content>

				<Tile.Footer>
					<Tile.HoverLink href={ Routes.newUserSession() }>Log In Instead</Tile.HoverLink>
				</Tile.Footer>
			</Form>
		</Tile>
	)
}

export default Register
