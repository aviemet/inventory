import React from 'react'
import { Form, Input, Checkbox, Submit } from '@/Components/Form'
import HoverLink from '../../HoverLink'
import { Routes } from '@/lib'
import { Tile } from '@/Components'
import tw, { styled } from 'twin.macro'

type TRegisterFormData = {
	email: string
	password: string
	password_confirmation: string
}

const CompleteRegistration = () => {
	const defaultData: TRegisterFormData = {
		email: '',
		password: '',
		password_confirmation: '',
	}

	const handleSubmit = ({ transform }) => {

	}

	return (
		<Tile.Container>
			<Form model="person" data={ defaultData } to={ Routes.completeRegistration() } onSubmit={ handleSubmit } grid={ false }>
				<Tile.Content>
					<div tw="mb-2">
						<h1 tw="text-center">Complete Registration</h1>
					</div>

					<div tw="mb-2">
						<Input name="first_name" placeholder="First Name" autoFocus autoComplete="first-name" />
					</div>

					<div tw="mb-2">
						<Input name="last_name" placeholder="Last Name" autoComplete="last-name" />
					</div>

					<div tw="mb-2">
						<Input name="name" model="company" placeholder="Company Name" />
					</div>

					<div tw="mb-4">
						<Submit className="large w-full">Complete and Log In!</Submit>
					</div>

				</Tile.Content>

				<Tile.Footer>
					<HoverLink href={ Routes.newUserSession() } tw="rounded-b-lg">Log In Instead</HoverLink>
				</Tile.Footer>
			</Form>
		</Tile.Container>
	)
}

export default CompleteRegistration
