import { Title, Page, Section } from "@/components"
import CompanyForm from "@/domains/Companies/Form"
import { Routes } from "@/lib"


interface EditCompanyProps {
	company: Schema.CompaniesEdit
}

const EditCompany = ({ company }: EditCompanyProps) => {
	const title = "Edit Company"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Companies", href: Routes.companies() },
			{ title: company.name!, href: Routes.company(company.slug) },
			{ title: "Edit Company", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<CompanyForm to={ Routes.companies() } company={ company } />
			</Section>
		</Page>
	)
}

export default EditCompany
