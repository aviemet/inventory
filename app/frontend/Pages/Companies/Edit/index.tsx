import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import CompanyForm from '../Form'

interface IEditCompanyProps {
	company: Schema.CompaniesEdit
}

const EditCompany = ({ company }: IEditCompanyProps) => {
	const title = 'Edit Company'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Companies', href: Routes.companies() },
			{ title: company.name!, href: Routes.company(company.slug) },
			{ title: 'Edit Company' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<CompanyForm to={ Routes.companies() } company={ company } />
			</Section>
		</Page>
	)
}

export default EditCompany
