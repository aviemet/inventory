import React from 'react'
import { Form, Input, Submit, Field } from '@/Components/Form'
import HoverLink from '../../../Components/Layout/HoverLink'
import { Routes } from '@/lib'
import { Heading, Tile } from '@/Components'
import { usePage } from '@inertiajs/inertia-react'

const firstRun = {
	heading: 'Create Admin User',
	description: 'Time to create your first user which  will be the admin for your inventory system'
}

const register = {
	heading: 'Sign Up',
	description: ''
}

const Register = () => {
	const { props } = usePage()

	const handleFormChange = ({ data }: Inertia.FormProps) => {
		// console.log({ data })
	}

	const handlePasswordChange = (value: string|number, { data, errors, clearErrors }: Inertia.FormProps) => {
		if(errors['user.password'] || errors['user.password_confirmation']) {
			if(data.user.password === data.user.password_confirmation) {
				clearErrors('user.password', 'user.password_confirmation')
			}
		}
	}

	const handleSubmit = ({ data, setError, errors, transform }: InertiaFormProps) => {
		if(data.user.password !== data.user.password_confirmation) {
			setError('user.password_confirmation', 'Passwords must match')
			return false
		}
	}

	const handleEmailBlur = (value: string|number, form: Inertia.FormProps) => {
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
					}
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
						<Input
							name="email"
							placeholder="Email"
							autoFocus
							autoComplete="Email"
							required
							onBlur={ handleEmailBlur }
						/>
					</Field>

					<Field>
						<Input
							name="password"
							type="password"
							placeholder="Password"
							autoComplete="new-password"
							required
							onChange={ handlePasswordChange }
						/>
					</Field>

					<Field>
						<Input
							name="password_confirmation"
							type="password"
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
					<HoverLink href={ Routes.newUserSession() }>Log In Instead</HoverLink>
				</Tile.Footer>
			</Form>
		</Tile>
	)
}

export default Register
