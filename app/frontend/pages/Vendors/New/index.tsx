
import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import VendorForm from "@/domains/Vendors/Form"

interface NewVendorProps {
	vendor: Schema.VendorsFormData
}

const New = ({ ...data }: NewVendorProps) => {
	const title = "New Vendor"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Vendors", href: Routes.vendors() },
			{ title: "New Vendor", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<VendorForm to={ Routes.vendors() } { ...data } />
			</Section>
		</Page>
	)
}

export default New
