
import { NewIcon } from "@/components/Icons"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import AccessoriesTable from "@/domains/Accessories/Table"

interface AccessoriesIndexProps {
	accessories: Schema.AccessoriesIndex[]
	pagination: Schema.Pagination
}

const AccessoriesIndex = ({ accessories, pagination }: AccessoriesIndexProps) => {
	return (
		<IndexPageTemplate
			title="Accessories"
			model="accessories"
			rows={ accessories }
			pagination={ pagination }
			deleteRoute={ Routes.accessories() }
			menuOptions={ [
				{ label: "Create New Accessory", href: Routes.newAccessory(), icon: <NewIcon /> },
			] }
		>
			<AccessoriesTable />
		</IndexPageTemplate>
	)
}

export default AccessoriesIndex
