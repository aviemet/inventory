import React from 'react'
import { Form, Input, Checkbox, Submit } from '@/Components/Form'
import HoverLink from '../../HoverLink'
import { Routes } from '@/lib'
import { Tile } from '@/Components'
import tw, { styled } from 'twin.macro'

const ConfirmationsNew = ({ user }) => {
	console.log({ user })
	const handleSubmit = ({ transform }) => {
		transform(data => ({ user: data }))
	}

	return (
		<Tile.Container>
			<Form model="user" data={ { email: user.email || '' } } to={ Routes.userConfirmation() } onSubmit={ handleSubmit } grid={ false }>
				<Tile.Content>
					<div tw="mb-2">
						<h3 tw="text-center mb-2">Please Confirm Your Email</h3>
						<p>Please check your email and follow the link to confirm you address. If you did not receive a confirmation message, submit your email address below to have it resent.</p>
					</div>

					<div tw="mb-2">
						<Input name="email" placeholder="Email" autoFocus autoComplete="Email" required />
					</div>

					<div tw="mb-4">
						<Submit tw="w-full" className="large">Resend confirmation instructions</Submit>
					</div>

				</Tile.Content>

				<Tile.Footer>
					<HoverLink href={ Routes.newUserRegistration() } tw="rounded-br-lg">Register</HoverLink>
					<HoverLink href={ Routes.newUserSession() } tw="rounded-b-lg">Log In Instead</HoverLink>
				</Tile.Footer>
			</Form>
		</Tile.Container>
	)
}

export default ConfirmationsNew

/*

<div class="field">
    <%= f.label :email %><br />
    <%= f.email_field :email, autofocus: true, autocomplete: "email", value: (resource.pending_reconfirmation? ? resource.unconfirmed_email : resource.email) %>
  </div>
	*/
