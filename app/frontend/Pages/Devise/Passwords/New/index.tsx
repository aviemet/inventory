import React from 'react'
import { Form, Input, Submit } from '@/Components/Form'
import { Link } from '@/Components'
import { Routes } from '@/lib'

type TPasswordsNewFormData = {
	email: string
}

const PasswordsNew = () => {
	const defaultData: TPasswordsNewFormData = {
		email: '',
	}

	const handleSubmit = ({ transform, wasSuccesful }) => {

	}

	return (
		<Form model="user" data={ defaultData } to={ Routes.newUserPassword() } onSubmit={ handleSubmit }>
			<div className="tile-content">
				<div className="mb-2">
					<h1 className="text-center">Reset Password</h1>
				</div>

				<div className="mb-2">
					<Input name="email" placeholder="Email" autoFocus autoComplete="Email" />
				</div>

				<div className="mb-4">
					<Submit className="large w-full">Send Reset Instructions</Submit>
				</div>

			</div>

			<div className="tile-footer flex">
				<Link href={ Routes.newUserSession() } className="link-hover flex-1">Log In</Link>
			</div>
		</Form>
	)
}

export default PasswordsNew
