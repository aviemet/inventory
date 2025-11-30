
import { Title, Page, Section } from "@/components"
import { ContactDetails } from "@/features/Contactable"
import { Routes } from "@/lib"

interface ShowCompanyProps {
	company: Schema.CompaniesShow
}

const Show = ({ company }: ShowCompanyProps) => {
	const title = company.name

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Companies", href: Routes.companies() },
			{ title: company.name, href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>
			</Section>

			{ company.contact && <Section>
				<ContactDetails contact={ company.contact } />
			</Section> }
		</Page>
	)
}

export default Show
