import React from 'react'
import { Form, Input, Checkbox, Submit } from '@/Components/Form'
import HoverLink from '../HoverLink'
import { Routes } from '@/lib'
import { Tile } from '@/Components'
import tw, { styled } from 'twin.macro'

const Register = () => {
	const defaultData = {
		user: {
			email: '',
			password: '',
			password_confirmation: '',
		}
	}

	const handlePasswordChange = (value: string, { data, errors, clearErrors }: Inertia.FormProps) => {
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

	// TODO: Disable submit until all inputs are valid. Async check for existing email address on input blur
	return (
		<Tile>
			<Form model="user" data={ defaultData } to={ Routes.userRegistration() } onSubmit={ handleSubmit } grid={ false }>
				<Tile.Content>

					<div tw="mb-2">
						<h1 tw="text-center">Sign Up</h1>
					</div>

					<div tw="mb-2">
						<Input
							name="email"
							placeholder="Email"
							autoFocus
							autoComplete="Email"
							required
						/>
					</div>

					<div tw="mb-2">
						<Input
							name="password"
							type="password"
							placeholder="Password"
							autoComplete="new-password"
							required
							onChange={ handlePasswordChange }
						/>
					</div>

					<div tw="mb-2">
						<Input
							name="password_confirmation"
							type="password"
							placeholder="Confirm Password"
							autoComplete="new-password"
							required
							onChange={ handlePasswordChange }
						/>
					</div>

					<div tw="mb-4">
						<Submit className="large w-full">Sign Up</Submit>
					</div>

				</Tile.Content>

				<Tile.Footer>
					<HoverLink href={ Routes.newUserSession() } tw="rounded-b-lg">Log In Instead</HoverLink>
				</Tile.Footer>
			</Form>
		</Tile>
	)
}

export default Register
