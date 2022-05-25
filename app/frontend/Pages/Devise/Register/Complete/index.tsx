import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Form, Input, Submit } from '@/Components/Form'
import HoverLink from '../../HoverLink'
import { Routes } from '@/lib'
import { Tile } from '@/Components'
import 'twin.macro'

type TRegisterFormData = {
	person: {
		first_name: string
		last_name: string
	}
	company: {
		name: string
	}
}

const CompleteRegistration = () => {
	const { props: { auth: { user } } } = usePage<InertiaPage>()

	console.log({ user })

	const defaultData: TRegisterFormData = {
		person: {
			first_name: user.person?.first_name ?? '',
			last_name: user.person?.last_name ?? '',
		},
		company: {
			name: user.active_company?.name ?? '',
		},
	}

	const handleSubmit = ({ transform }: InertiaFormProps) => {

	}

	return (
		<Tile.Container>
			<Form model="person" data={ defaultData } to={ Routes.completeRegistration() } onSubmit={ handleSubmit } grid={ false }>
				<Tile.Content>
					<div tw="mb-2">
						<h2 tw="text-center mb-2">Complete Registration</h2>
						<p>Let&apos;s get a little more information about you.</p>
					</div>

					<div tw="mb-2">
						<Input name="first_name" placeholder="First Name" autoFocus autoComplete="first-name" />
					</div>

					<div tw="mb-2">
						<Input name="last_name" placeholder="Last Name" autoComplete="last-name" />
					</div>

					<div tw="mb-2">
						<p>And the name of the entity which owns the assets you&apos;ll be tracking.</p>
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
