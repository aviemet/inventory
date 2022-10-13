import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowCompanyProps {
	company: Schema.Company
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
		</Page>
	)
}

export default Show
