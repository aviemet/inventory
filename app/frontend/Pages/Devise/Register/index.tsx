import React from 'react'
import { Form, Input, Checkbox, Submit } from '@/Components/Form'
import { Link } from '@/Components'
import { Routes } from '@/lib'

type TRegisterFormData = {
	email: string
	password: string
	password_confirmation: string
}

const Register = () => {
	const defaultData: TRegisterFormData = {
		email: '',
		password: '',
		password_confirmation: '',
	}

	const handleSubmit = ({ transform, wasSuccesful }) => {
	}

	return (
		<Form model="user" data={ defaultData } to="/register" onSubmit={ handleSubmit }>
			<div className="tile-content">
				<div className="mb-2">
					<h1 className="text-center">Sign Up</h1>
				</div>

				<div className="mb-2">
					<Input name="email" placeholder="Email" autoFocus autoComplete="Email" />
				</div>

				<div className="mb-2">
					<Input name="password" type="password" placeholder="Password" autoComplete="new-password" />
				</div>

				<div className="mb-2">
					<Input name="password_confirmation" type="password" placeholder="Confirm Password" autoComplete="new-password" />
				</div>

				<div className="mb-4">
					<Submit className="large w-full">Sign Up</Submit>
				</div>

			</div>

			<div className="tile-footer flex">
				<Link href={ Routes.newUserSession() } className="link-hover flex-1">Log In</Link>
			</div>
		</Form>
	)
}

export default Register
