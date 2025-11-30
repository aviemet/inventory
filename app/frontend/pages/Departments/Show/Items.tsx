import React from "react"

import { Section } from "@/components"
import { NewIcon } from "@/components/Icons"
import ShowPageTableTemplate from "@/features/ShowPageTableTemplate"
import { Routes } from "@/lib"
import ItemsTable from "@/pages/Items/Table"
import { type PaginatedModel } from "@/types/PaginatedModel"

interface DetailsProps {
	department: Schema.Department
	items: PaginatedModel<Schema.Item[]>
}

const Details = ({ department, items }: DetailsProps) => {
	return (
		<Section>
			<ShowPageTableTemplate
				title={ `${department.name} Assets` }
				model="items"
				rows={ items?.data }
				pagination={ items?.pagination }
				menuOptions={ [
					{ label: "New Asset", href: Routes.newItem(), icon: <NewIcon /> },
				] }
			>
				<ItemsTable wrapper={ false } />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
