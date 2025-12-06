import { Section } from "@/components"
import { NewIcon } from "@/components/Icons"
import ItemsTable from "@/domains/Items/Table"
import ShowPageTableTemplate from "@/features/ShowPageTableTemplate"
import { Routes } from "@/lib"
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
				menuOptions={ [
					{ label: "New Asset", href: Routes.newItem(), icon: <NewIcon /> },
				] }
			>
				<ItemsTable records={ items?.data ?? [] } pagination={ items?.pagination } model="items" />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
