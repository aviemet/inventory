import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { ContactDetails } from '@/Features/Contactable'
import { Routes } from '@/lib'

interface IShowCompanyProps {
	company: Schema.CompaniesShow
}

const Show = ({ company }: IShowCompanyProps) => {
	const title = company.name

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Companies', href: Routes.companies() },
			{ title: company.name! },
		] }>
			<Section>
				<Heading>{ title }</Heading>
			</Section>

			{ company.contact && <Section>
				<ContactDetails contact={ company.contact } />
			</Section> }
		</Page>
	)
}

export default Show
