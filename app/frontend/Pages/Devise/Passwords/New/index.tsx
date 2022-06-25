import React from 'react'
import { Form, Input, Submit } from '@/Components/Form'
import HoverLink from '../../HoverLink'
import { Routes } from '@/lib'
import { Tile } from '@/Components'

type TPasswordsNewFormData = {
	email: string
}

const PasswordsNew = () => {
	const defaultData: TPasswordsNewFormData = {
		email: '',
	}

	const handleSubmit = ({ transform }: Inertia.FormProps) => {

	}

	return (
		<Tile>
			<Form model="user" data={ defaultData } to={ Routes.newUserPassword() } onSubmit={ handleSubmit } grid={ false }>
				<Tile.Content>
					<div tw="mb-2">
						<h1 tw="text-center">Reset Password</h1>
					</div>

					<div tw="mb-2">
						<Input name="email" placeholder="Email" autoFocus autoComplete="Email" />
					</div>

					<div tw="mb-4">
						<Submit>Send Reset Instructions</Submit>
					</div>

				</Tile.Content>

				<Tile.Footer>
					<HoverLink href={ Routes.newUserSession() } tw="rounded-b-lg">Log In</HoverLink>
				</Tile.Footer>
			</Form>
		</Tile>
	)
}

export default PasswordsNew
