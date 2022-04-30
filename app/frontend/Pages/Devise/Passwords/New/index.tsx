import React from 'react'
import { Form, Input, Submit } from '@/Components/Form'
import HoverLink from '../../HoverLink'
import { Routes } from '@/lib'
import { Tile } from '@/Components'
import tw, { styled } from 'twin.macro'

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
		<Tile.Container>
			<Form model="user" data={ defaultData } to={ Routes.newUserPassword() } onSubmit={ handleSubmit }>
				<Tile.Content>
					<div tw="mb-2">
						<h1 tw="text-center">Reset Password</h1>
					</div>

					<div tw="mb-2">
						<Input name="email" placeholder="Email" autoFocus autoComplete="Email" />
					</div>

					<div tw="mb-4">
						<Submit className="large" tw="w-full">Send Reset Instructions</Submit>
					</div>

				</Tile.Content>

				<Tile.Footer>
					<HoverLink href={ Routes.newUserSession() } tw="rounded-b-lg">Log In</HoverLink>
				</Tile.Footer>
			</Form>
		</Tile.Container>
	)
}

export default PasswordsNew
