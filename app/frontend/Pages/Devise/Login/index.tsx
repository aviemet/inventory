import React, { useRef } from 'react'
import { Form, Input, Checkbox, Submit } from '@/Components/Form'
import HoverLink from '../HoverLink'
import { Routes } from '@/lib'
import { Tile } from '@/Components'
import { AuthFlash } from '@/Components/Flash'
import tw, { styled } from 'twin.macro'

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
		<Tile.Container>
			<Form model="user" data={ defaultData } to={ Routes.newUserSession() } onSubmit={ handleSubmit } grid={ false }>
				<Tile.Content>

					<div tw="mb-2">
						<h1 tw="text-center">Inventory</h1>
					</div>

					<AuthFlash />

					<div tw="mb-2">
						<Input
							name="email"
							placeholder="Email"
							autoFocus
							autoComplete="Email"
							required ref={ emailInputRef }
							pattern=".+@.+\..+"
						/>
					</div>

					<div tw="mb-2">
						<Input
							name="password"
							type="password"
							placeholder="Password"
							autoComplete="current-password"
							required
						/>
					</div>

					<div tw="mb-4">
						<Submit>Log In</Submit>
					</div>

					<div tw="mb-2">
						<Checkbox name="remember_me" label="Remember Me" />
					</div>

				</Tile.Content>

				<Tile.Footer>
					<HoverLink href={ Routes.newUserPassword() } tw="rounded-bl-lg">Reset Password</HoverLink>
					<HoverLink href={ Routes.newUserRegistration() } tw="rounded-br-lg">Register</HoverLink>
				</Tile.Footer>
			</Form>
		</Tile.Container>
	)
}

export default Login
