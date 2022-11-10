import React from 'react'
import { Field, Form, Input, Submit } from '@/Components/Form'
import { Routes } from '@/lib'
import { Heading, Tile } from '@/Components'

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
					<div>
						<Heading>Reset Password</Heading>
					</div>

					<Field>
						<Input name="email" placeholder="Email" autoFocus autoComplete="Email" />
					</Field>

					<Field>
						<Submit>Send Reset Instructions</Submit>
					</Field>

				</Tile.Content>

				<Tile.Footer>
					<Tile.HoverLink href={ Routes.newUserSession() }>Log In</Tile.HoverLink>
				</Tile.Footer>
			</Form>
		</Tile>
	)
}

export default PasswordsNew
