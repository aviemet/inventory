import React from 'react'
import { Heading, Page, Section } from '@/Components'
import NewPersonForm from './Form'
import { Routes } from '@/lib'

interface NewPersonProps {
	person: Schema.PeopleFormData
}

const New = ({ person }: NewPersonProps) => {
	const title = 'New Person'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'People', href: Routes.people() },
			{ title: 'New Person', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<NewPersonForm to={ Routes.people() } person={ person } />
			</Section>
		</Page>
	)
}

export default New
