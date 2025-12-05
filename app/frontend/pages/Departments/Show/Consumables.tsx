import { Section } from "@/components"
import { NewIcon } from "@/components/Icons"
import ConsumablesTable from "@/domains/Consumables/Table"
import ShowPageTableTemplate from "@/features/ShowPageTableTemplate"
import { Routes } from "@/lib"
import { type PaginatedModel } from "@/types/PaginatedModel"

interface DetailsProps {
	department: Schema.Department
	consumables: PaginatedModel<Schema.Consumable[]>
}

const Details = ({ department, consumables }: DetailsProps) => {
	return (
		<Section>
			<ShowPageTableTemplate
				title={ `${department.name} Consumables` }
				model="consumables"
				menuOptions={ [
					{ label: "New Consumable", href: Routes.newConsumable(), icon: <NewIcon /> },
				] }
			>
				<ConsumablesTable records={ consumables?.data ?? [] } pagination={ consumables?.pagination } model="consumables" />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
