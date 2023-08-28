import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { Routes } from '@/lib'
import { Heading, Tile } from '@/Components'

interface IConfirmationsNew {
	user: Schema.User
}

const ConfirmationsNew = ({ user }: IConfirmationsNew) => {
	return (
		<Tile>
			<Form
				disableFormatting
				model="user"
				data={ { user } }
				to={ Routes.userConfirmation() }
			>
				<Tile.Content>
					<div>
						<Heading order={ 3 }>Please check your email</Heading>
						<p>You will receive an email within the next couple minutes. Please follow the link to confirm your account.</p>
						<p>If you don&apos;t receive an email, use the form below to resend it.</p>
					</div>

					<div>
						<TextInput name="email" placeholder="Email" autoComplete="Email" required />
					</div>

					<div>
						<Submit className="large">Resend confirmation instructions</Submit>
					</div>

				</Tile.Content>

				<Tile.Footer>
					<Tile.HoverLink href={ Routes.newUserRegistration() }>Register</Tile.HoverLink>
					<Tile.HoverLink href={ Routes.newUserSession() }>Log In Instead</Tile.HoverLink>
				</Tile.Footer>
			</Form>
		</Tile>
	)
}

export default ConfirmationsNew
