import React from 'react'
import { Field, Form, TextInput, Submit } from '@/Components/Form'
import { Routes } from '@/lib'
import { Heading, Tile } from '@/Components'

type TPasswordsNewFormData = {
	email: string
}

const PasswordsNew = () => {
	const defaultData: TPasswordsNewFormData = {
		email: '',
	}

	return (
		<Tile>
			<Form
				disableFormatting
				model="user"
				data={ defaultData }
				to={ Routes.newUserPassword() }
			>
				<Tile.Content>
					<div>
						<Heading>Reset Password</Heading>
					</div>

					<Field>
						<TextInput name="email" placeholder="Email" autoFocus autoComplete="Email" />
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
