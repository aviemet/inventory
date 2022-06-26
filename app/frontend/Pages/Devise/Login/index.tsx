import React, { useRef } from 'react'
import { Form, Input, Checkbox, Submit } from '@/Components/Form'
import HoverLink from '../HoverLink'
import { Routes } from '@/lib'
import { Heading, Tile } from '@/Components'

const Login = () => {
	const emailInputRef = useRef<HTMLInputElement>(null)

	const defaultData = {
		user: {
			email: '',
			password: '',
			remember_me: false,
		}
	}

	const handleSubmit = ({ data }: Inertia.FormProps) => {
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

					<div>
						<Input
							name="email"
							placeholder="Email"
							autoFocus
							autoComplete="Email"
							required ref={ emailInputRef }
							pattern=".+@.+\..+"
						/>
					</div>

					<div>
						<Input
							name="password"
							type="password"
							placeholder="Password"
							autoComplete="current-password"
							required
						/>
					</div>

					<div>
						<Submit>Log In</Submit>
					</div>

					<div>
						<Checkbox name="remember_me" label="Remember Me" />
					</div>

				</Tile.Content>

				<Tile.Footer>
					<HoverLink href={ Routes.newUserPassword() }>Reset Password</HoverLink>
					<HoverLink href={ Routes.newUserRegistration() }>Register</HoverLink>
				</Tile.Footer>
			</Form>
		</Tile>
	)
}

export default Login
