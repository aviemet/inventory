import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Form, Input, Submit } from '@/Components/Form'
import HoverLink from '../../HoverLink'
import { Routes } from '@/lib'
import { Heading, Tile } from '@/Components'

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
		<Tile>
			<Form model="person" data={ defaultData } to={ Routes.completeRegistration() } onSubmit={ handleSubmit } grid={ false }>
				<Tile.Content>
					<div>
						<Heading order={ 2 }>Complete Registration</Heading>
						<p>Let&apos;s get a little more information about you.</p>
					</div>

					<div>
						<Input name="first_name" placeholder="First Name" autoFocus autoComplete="first-name" />
					</div>

					<div>
						<Input name="last_name" placeholder="Last Name" autoComplete="last-name" />
					</div>

					<div>
						<p>And the name of the entity which owns the assets you&apos;ll be tracking.</p>
					</div>

					<div>
						<Input name="name" model="company" placeholder="Company Name" />
					</div>

					<div>
						<Submit>Complete and Log In!</Submit>
					</div>

				</Tile.Content>

				<Tile.Footer>
					<HoverLink href={ Routes.newUserSession() }>Log In Instead</HoverLink>
				</Tile.Footer>
			</Form>
		</Tile>
	)
}

export default CompleteRegistration
