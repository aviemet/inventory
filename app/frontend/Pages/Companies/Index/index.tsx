import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Features'
import { NewIcon } from '@/components/Icons'
import CompaniesTable from '../Table'

interface CompaniesIndexProps {
	companies: Schema.CompaniesIndex[]
	pagination: Schema.Pagination
}

const CompaniesIndex = ({ companies, pagination }: CompaniesIndexProps) => {
	return (
		<IndexPageTemplate
			title="Companies"
			model="companies"
			rows={ companies }
			pagination={ pagination }
			deleteRoute={ Routes.companies() }
			menuOptions={ [
				{ label: 'New Company', href: Routes.newCompany(), icon: <NewIcon /> },
			] }
		>
			<CompaniesTable />
		</IndexPageTemplate>
	)
}

export default CompaniesIndex
