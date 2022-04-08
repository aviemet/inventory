import React from 'react'
import { Form, Input, Checkbox, Submit } from '@/Components/Form'
import { Link } from '@/Components'
import { Routes } from '@/lib'

type TLoginFormData = {
	email: string
	password: string
	remember_me: boolean
}

const Login = () => {
	const defaultData: TLoginFormData = {
		email: '',
		password: '',
		remember_me: false,
	}

	const handleSubmit = ({ transform, wasSuccesful }) => {
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
		<Form model="user" data={ defaultData } to={ Routes.newUserSession() } onSubmit={ handleSubmit }>
			<div className="tile-content">
				<div className="mb-2">
					<h1 className="text-center">Inventory</h1>
				</div>

				<div className="mb-2">
					<Input name="email" placeholder="Email" autoFocus autoComplete="Email" />
				</div>

				<div className="mb-2">
					<Input name="password" type="password" placeholder="Password" autoComplete="current-password" />
				</div>

				<div className="mb-4">
					<Submit className="large w-full">Log In</Submit>
				</div>

				<div className="mb-2">
					<Checkbox label="Remember Me" name="remember_me" />
				</div>

			</div>

			<div className="tile-footer flex">
				<Link href={ Routes.newUserPassword() } className="link-hover flex-1">Reset Password</Link>
				<Link href={ Routes.newUserRegistration() } className="link-hover flex-1">Register</Link>
			</div>
		</Form>
	)
}

export default Login
