import React from 'react'
import { Breadcrumbs, Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import CompanyForm from '../Form'

interface NewCompanyProps {
	company: Schema.CompaniesFormData
}

const NewCompany = ({ company }: NewCompanyProps) => {
	const title = 'New Company'

	return (
		<Page title={ title }>
			<Breadcrumbs crumbs={ [
				{ title: 'Companies', href: Routes.companies() },
				{ title: 'New Company' },
			] } />

			<Section>
				<Heading>{ title }</Heading>

				<CompanyForm to={ Routes.companies() } company={ company } />
			</Section>
		</Page>
	)
}

export default NewCompany
