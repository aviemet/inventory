import { Section } from "@/components"
import { NewIcon } from "@/components/Icons"
import LicensesTable from "@/domains/Licenses/Table"
import ShowPageTableTemplate from "@/features/ShowPageTableTemplate"
import { Routes } from "@/lib"
import { type PaginatedModel } from "@/types/PaginatedModel"

interface DetailsProps {
	department: Schema.Department
	licenses: PaginatedModel<Schema.License[]>
}

const Details = ({ department, licenses }: DetailsProps) => {
	return (
		<Section>
			<ShowPageTableTemplate
				title={ `${department.name} Licenses` }
				model="licenses"
				menuOptions={ [
					{ label: "New License", href: Routes.newLicense(), icon: <NewIcon /> },
				] }
			>
				<LicensesTable records={ licenses?.data ?? [] } pagination={ licenses?.pagination } model="licenses" />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
