import React from 'react'
import { Form, Input, Checkbox, Submit } from '@/Components/Form'
import HoverLink from '../HoverLink'
import { Routes } from '@/lib'
import { Tile } from '@/Components'
import tw, { styled } from 'twin.macro'

type TLoginFormData = {
	email: string
	password: string
	remember_me: boolean
}

interface ILoginProps extends SharedIndertiaProps {}

const Login = () => {
	const defaultData: TLoginFormData = {
		email: '',
		password: '',
		remember_me: false,
	}

	const handleSubmit = ({ transform }) => {
		transform(data => {
			return {
				user: {
					email: data.email,
					password: data.password,
					remember_me: data.remember_me
				}
			}
		})
	}

	return (
		<Tile.Container>
			<Form model="user" data={ defaultData } to={ Routes.newUserSession() } onSubmit={ handleSubmit } grid={ false }>
				<Tile.Content>
					<div tw="mb-2">
						<h1 tw="text-center">Inventory</h1>
					</div>

					<div tw="mb-2">
						<Input name="email" placeholder="Email" autoFocus autoComplete="Email" required />
					</div>

					<div tw="mb-2">
						<Input name="password" type="password" placeholder="Password" autoComplete="current-password" required />
					</div>

					<div tw="mb-4">
						<Submit tw="w-full" className="large">Log In</Submit>
					</div>

					<div tw="mb-2">
						<Checkbox name="remember_me" label="Remember Me" labelPosition='end' />
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
