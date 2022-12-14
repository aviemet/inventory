import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import CompaniesTable from '../Table'

interface ICompaniesIndexProps {
	companies: Schema.CompanyWithCounts[]
	pagination: Schema.Pagination
}

const CompaniesIndex = ({ companies, pagination }: ICompaniesIndexProps) => {
	return (
		<IndexPageTemplate
			title="Companies"
			model="companies"
			rows={ companies }
			pagination={ pagination }
			menuOptions={ [
				{ label: 'New Company', href: Routes.newCompany(), icon: NewIcon },
			] }
		>
			<CompaniesTable />
		</IndexPageTemplate>
	)
}

export default CompaniesIndex
