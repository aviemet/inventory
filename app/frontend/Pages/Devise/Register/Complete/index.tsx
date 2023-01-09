import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Field, Form, Input, Submit } from '@/Components/Form'
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

					<Field>
						<Input name="first_name" placeholder="First Name" autoFocus autoComplete="first-name" />
					</Field>

					<Field>
						<Input name="last_name" placeholder="Last Name" autoComplete="last-name" />
					</Field>

					<Field>
						<p>And the name of the entity which owns the assets you&apos;ll be tracking.</p>

						<Input name="name" model="company" placeholder="Company Name" />

						<p>If you will be tracking assets owned by multiple companies, enter the primary entity here, you&apos;ll have the opporutnity to create other companies later.</p>
					</Field>

					<Field>
						<Submit>Complete and Log In!</Submit>
					</Field>

				</Tile.Content>

				<Tile.Footer>
					<Tile.HoverLink href={ Routes.userRegistration() }>Register Instead</Tile.HoverLink>
				</Tile.Footer>
			</Form>
		</Tile>
	)
}

export default CompleteRegistration
