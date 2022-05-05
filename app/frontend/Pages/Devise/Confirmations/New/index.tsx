import React from 'react'
import { Form, Input, Checkbox, Submit } from '@/Components/Form'
import HoverLink from '../../HoverLink'
import { Routes } from '@/lib'
import { Tile } from '@/Components'
import tw, { styled } from 'twin.macro'

const ConfirmationsNew = ({ user }) => {
	const handleSubmitConfirmationCode = ({ transform }) => {

	}

	const handleResendConfirmation = ({ transform }) => {
		transform(data => ({ user: data }))
	}

	return (
		<Tile.Container>
			<Form model="user" data={ { code: '' } } to={ Routes.userConfirmation() } onSubmit={ handleSubmitConfirmationCode } grid={ false }>
				<Tile.Content>
					<div tw="mb-2">
						<h3 tw="text-center mb-2">Please Confirm Your Email</h3>
						<p>When you registered, we sent you an email with a confirmation code. Please enter that code below to complete registration.</p>
					</div>

					<div tw="mb-2">
						<Input name="code" placeholder="Confirmation Code" autoFocus required />
					</div>
				</Tile.Content>
			</Form>

			<Form model="user" data={ { email: user.email || '' } } to={ Routes.userConfirmation() } onSubmit={ handleResendConfirmation } grid={ false }>
				<Tile.Content>
					<div tw="mb-2">
						<p>If you did not receive a confirmation message, submit your email address below to have it resent.</p>
					</div>

					<div tw="mb-2">
						<Input name="email" placeholder="Email" autoComplete="Email" required />
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
