import { Section } from "@/components"
import { NewIcon } from "@/components/Icons"
import ComponentsTable from "@/domains/Components/Table"
import ShowPageTableTemplate from "@/features/ShowPageTableTemplate"
import { Routes } from "@/lib"
import { type PaginatedModel } from "@/types/PaginatedModel"


interface DetailsProps {
	department: Schema.Department
	components: PaginatedModel<Schema.Component[]>
}

const Details = ({ department, components }: DetailsProps) => {
	return (
		<Section>
			<ShowPageTableTemplate
				title={ `${department.name} Components` }
				model="components"
				menuOptions={ [
					{ label: "New Component", href: Routes.newComponent(), icon: <NewIcon /> },
				] }
			>
				<ComponentsTable records={ components?.data ?? [] } pagination={ components?.pagination } model="components" />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
