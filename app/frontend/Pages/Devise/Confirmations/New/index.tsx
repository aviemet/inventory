import React from 'react'
import { Form, Input, Submit } from '@/Components/Form'
import HoverLink from '../../HoverLink'
import { Routes } from '@/lib'
import { Tile } from '@/Components'
import tw from 'twin.macro'

interface IConfirmationsNew {
	user: Schema.User
}

const ConfirmationsNew = ({ user }: IConfirmationsNew) => {
	const handleResendConfirmation = ({ transform }: InertiaFormProps) => {
		transform(data => ({ user: data }))
	}

	return (
		<Tile>
			<Form model="user" data={ { user: { email: user.email || '' } } } to={ Routes.userConfirmation() } onSubmit={ handleResendConfirmation } grid={ false }>
				<Tile.Content>
					<div tw="mb-3">
						<h3 tw="mb-3">Please check your email</h3>
						<p tw="mb-3">You will receive an email within the next couple minutes. Please follow the link to confirm your account.</p>
						<p>If you don&apos;t receive an email, use the form below to resend it.</p>
					</div>

					<div tw="mb-3">
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
		</Tile>
	)
}

export default ConfirmationsNew
