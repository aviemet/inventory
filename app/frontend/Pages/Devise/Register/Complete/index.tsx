import React from 'react'
import { Field, Form, TextInput, Submit } from '@/Components/Form'
import { Routes } from '@/lib'
import { Title, Tile } from '@/Components'
import { usePageProps } from '@/lib/hooks'

type RegisterFormData = {
	person: {
		first_name: string
		last_name: string
	}
	company: {
		name: string
	}
}

const CompleteRegistration = () => {
	const { auth: { user } } = usePageProps()

	const defaultData: RegisterFormData = {
		person: {
			first_name: user.person?.first_name ?? '',
			last_name: user.person?.last_name ?? '',
		},
		company: {
			name: user.active_company?.name ?? '',
		},
	}

	return (
		<Tile>
			<Form
				disableFormatting
				model="person"
				data={ defaultData }
				to={ Routes.completeRegistration() }
			>
				<Tile.Content>
					<div>
						<Title order={ 2 }>Complete Registration</Title>
						<p>Let&apos;s get a little more information about you.</p>
					</div>

					<Field>
						<TextInput name="first_name" placeholder="First Name" autoComplete="first-name" />
					</Field>

					<Field>
						<TextInput name="last_name" placeholder="Last Name" autoComplete="last-name" />
					</Field>

					<Field>
						<p>And the name of the entity which owns the assets you&apos;ll be tracking.</p>

						<TextInput name="name" model="company" placeholder="Company Name" />

						<p>If you will be tracking assets owned by multiple companies, enter the primary entity here, you&apos;ll have the opportunity to create other companies later.</p>
					</Field>

					<Field mb={ 16 }>
						<Submit>Complete and Log In!</Submit>
					</Field>

				</Tile.Content>
			</Form>
		</Tile>
	)
}

export default CompleteRegistration
