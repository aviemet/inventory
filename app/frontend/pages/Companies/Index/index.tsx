
import { NewIcon } from "@/components/Icons"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import CompaniesTable, { companiesColumns } from "@/domains/Companies/Table"

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
			columns={ companiesColumns }
			pagination={ pagination }
			deleteRoute={ Routes.companies() }
			menuOptions={ [
				{ label: "New Company", href: Routes.newCompany(), icon: <NewIcon /> },
			] }
		>
			<CompaniesTable />
		</IndexPageTemplate>
	)
}

export default CompaniesIndex
