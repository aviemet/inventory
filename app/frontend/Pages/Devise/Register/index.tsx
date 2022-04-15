import React from 'react'
import { Form, Input, Checkbox, Submit } from '@/Components/Form'
import HoverLink from '../HoverLink'
import { Routes } from '@/lib'
import { Tile } from '@/Components'
import tw, { styled } from 'twin.macro'

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
		<Tile.Container>
			<Form model="user" data={ defaultData } to="/register" onSubmit={ handleSubmit }>
				<Tile.Content>
					<div tw="mb-2">
						<h1 tw="text-center">Sign Up</h1>
					</div>

					<div tw="mb-2">
						<Input name="email" placeholder="Email" autoFocus autoComplete="Email" />
					</div>

					<div tw="mb-2">
						<Input name="password" type="password" placeholder="Password" autoComplete="new-password" />
					</div>

					<div tw="mb-2">
						<Input name="password_confirmation" type="password" placeholder="Confirm Password" autoComplete="new-password" />
					</div>

					<div tw="mb-4">
						<Submit className="large w-full">Sign Up</Submit>
					</div>

				</Tile.Content>

				<Tile.Footer>
					<HoverLink href={ Routes.newUserSession() } tw="rounded-b-lg">Log In</HoverLink>
				</Tile.Footer>
			</Form>
		</Tile.Container>
	)
}

export default Register
