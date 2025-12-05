import { NewIcon } from "@/components/Icons"
import ManufacturersTable from "@/domains/Manufacturers/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface ManufacturersIndexProps {
	manufacturers: Schema.ManufacturersIndex[]
	pagination: Schema.Pagination
}

const ManufacturersIndex = ({ manufacturers, pagination }: ManufacturersIndexProps) => {
	return (
		<IndexPageTemplate
			title="Manufacturers"
			model="manufacturers"
			pagination={ pagination }
			deleteRoute={ Routes.manufacturers() }
			menuOptions={ [
				{ label: "New Manufacturer", href: Routes.newManufacturer(), icon: <NewIcon /> },
			] }
		>
			<ManufacturersTable records={ manufacturers } pagination={ pagination } model="manufacturers" />
		</IndexPageTemplate>
	)
}

export default ManufacturersIndex
