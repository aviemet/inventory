
import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import LicenseForm from "@/domains/Licenses/Form"

interface NewLicenseProps {
	license: Schema.LicensesFormData
}

const New = ({ license }: NewLicenseProps) => {
	const title = "New License"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Licenses", href: Routes.licenses() },
			{ title: "New License", href: window.location.href },
		] }>

			<Section>
				<Title>{ title }</Title>

				<LicenseForm to={ Routes.licenses() } license={ license } />
			</Section>

		</Page>
	)
}

export default New
