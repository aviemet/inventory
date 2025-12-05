import { Section } from "@/components"
import { NewIcon } from "@/components/Icons"
import AccessoriesTable from "@/domains/Accessories/Table"
import ShowPageTableTemplate from "@/features/ShowPageTableTemplate"
import { Routes } from "@/lib"
import { type PaginatedModel } from "@/types/PaginatedModel"

interface DetailsProps {
	department: Schema.Department
	accessories: PaginatedModel<Schema.Accessory[]>
}

const Details = ({ department, accessories }: DetailsProps) => {
	return (
		<Section>
			<ShowPageTableTemplate
				title={ `${department.name} Accessories` }
				model="accessories"
				menuOptions={ [
					{ label: "New Accessory", href: Routes.newAccessory(), icon: <NewIcon /> },
				] }
			>
				<AccessoriesTable records={ accessories?.data ?? [] } pagination={ accessories?.pagination } model="accessories" />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
