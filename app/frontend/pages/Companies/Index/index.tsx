import { NewIcon } from "@/components/Icons"
import CompaniesTable, { companiesColumns } from "@/domains/Companies/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


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
			<CompaniesTable records={ companies } pagination={ pagination } model="companies" />
		</IndexPageTemplate>
	)
}

export default CompaniesIndex
