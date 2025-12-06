import { NewIcon } from "@/components/Icons"
import AccessoriesTable from "@/domains/Accessories/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface AccessoriesIndexProps {
	accessories: Schema.AccessoriesIndex[]
	pagination: Schema.Pagination
}

const AccessoriesIndex = ({ accessories, pagination }: AccessoriesIndexProps) => {
	return (
		<IndexPageTemplate
			title="Accessories"
			model="accessories"
			pagination={ pagination }
			deleteRoute={ Routes.accessories() }
			menuOptions={ [
				{ label: "Create New Accessory", href: Routes.newAccessory(), icon: <NewIcon /> },
			] }
		>
			<AccessoriesTable records={ accessories } pagination={ pagination } model="accessories" />
		</IndexPageTemplate>
	)
}

export default AccessoriesIndex
