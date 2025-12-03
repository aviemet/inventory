import { Title, Page, Section } from "@/components"
import LicenseForm from "@/domains/Licenses/Form"
import { Routes } from "@/lib"


interface UpdateLicenseProps {
	license: Schema.LicensesEdit
}

const New = ({ license }: UpdateLicenseProps) => {
	const title = `Edit ${license.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Licenses", href: Routes.licenses() },
			{ title: license.name!, href: Routes.license(license) },
			{ title: "Edit License", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<LicenseForm to={ Routes.license(license) } method="patch" license={ license } />
			</Section>
		</Page>
	)
}

export default New
