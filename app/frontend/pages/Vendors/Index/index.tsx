import { NewIcon } from "@/components/Icons"
import VendorsTable from "@/domains/Vendors/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface VendorsIndexProps {
	vendors: Schema.VendorsIndex[]
	pagination: Schema.Pagination
}

const VendorsIndex = ({ vendors, pagination }: VendorsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Vendors"
			model="vendors"
			pagination={ pagination }
			deleteRoute={ Routes.vendors() }
			menuOptions={ [
				{ label: "New Vendor", href: Routes.newVendor(), icon: <NewIcon /> },
			] }
		>
			<VendorsTable records={ vendors } pagination={ pagination } model="vendors" />
		</IndexPageTemplate>
	)
}

export default VendorsIndex
