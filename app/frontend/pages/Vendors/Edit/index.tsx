import { Title, Page, Section } from "@/components"
import VendorForm from "@/domains/Vendors/Form"
import { Routes } from "@/lib"


interface UpdateVendorProps {
	vendor: Schema.VendorsEdit
}

const EditVendor = ({ vendor, ...models }: UpdateVendorProps) => {
	const title = `Edit ${vendor.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Vendors", href: Routes.vendors() },
			{ title: vendor.name!, href: Routes.vendor(vendor) },
			{ title: "Edit Vendor", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>
				<VendorForm
					to={ Routes.vendor(vendor.slug) }
					method="patch"
					vendor={ vendor }
					{ ...models }
				/>
			</Section>
		</Page>
	)
}

export default EditVendor
