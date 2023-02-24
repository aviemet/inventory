import React, { useRef } from 'react'
import { Form, Field, TextInput, PasswordInput, Checkbox, Submit } from '@/Components/Form'
import { Routes } from '@/lib'
import { Heading, Tile } from '@/Components'
import { type UseFormProps } from 'use-inertia-form'

const Login = () => {
	const emailInputRef = useRef<HTMLInputElement>(null)

	const defaultData = {
		user: {
			email: '',
			password: '',
			remember_me: false,
		},
	}

	const handleSubmit = ({ data }: UseFormProps) => {
		if(data.user.email === '' || data.user.password === '') {
			emailInputRef.current!.focus()
			return false
		}
	}

	return (
		<Tile>
			<Form model="user" data={ defaultData } to={ Routes.newUserSession() } onSubmit={ handleSubmit } grid={ false }>
				<Tile.Content>

					<div>
						<Heading>Inventory</Heading>
					</div>

					<Field>
						<TextInput
							name="email"
							placeholder="Email"
							autoFocus
							autoComplete="Email"
							required
							ref={ emailInputRef }
							pattern=".+@.+\..+"
						/>
					</Field>

					<Field>
						<PasswordInput
							name="password"
							placeholder="Password"
							autoComplete="current-password"
							required
						/>
					</Field>

					<Field>
						<Submit>Log In</Submit>
					</Field>

					<Field>
						<Checkbox name="remember_me" label="Remember Me" />
					</Field>

				</Tile.Content>

				<Tile.Footer>
					<Tile.HoverLink href={ Routes.newUserPassword() }>Reset Password</Tile.HoverLink>
					<Tile.HoverLink href={ Routes.newUserRegistration() }>Register</Tile.HoverLink>
				</Tile.Footer>
			</Form>
		</Tile>
	)
}

export default Login
