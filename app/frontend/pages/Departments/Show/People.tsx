import { Section } from "@/components"
import { NewIcon } from "@/components/Icons"
import PeopleTable, { peopleColumns } from "@/domains/People/Table"
import ShowPageTableTemplate from "@/features/ShowPageTableTemplate"
import { Routes } from "@/lib"
import { type PaginatedModel } from "@/types/PaginatedModel"

interface DetailsProps {
	department: Schema.Department
	people: PaginatedModel<Schema.Person[]>
}

const Details = ({ department, people }: DetailsProps) => {
	return (
		<Section>
			<ShowPageTableTemplate
				title={ `${department.name} People` }
				model="people"
				rows={ people?.data }
				columns={ peopleColumns }
				pagination={ people?.pagination }
				menuOptions={ [
					{ label: "New Person", href: Routes.newPerson(), icon: <NewIcon /> },
				] }
			>
				<PeopleTable records={ people?.data ?? [] } pagination={ people?.pagination } model="people" />
			</ShowPageTableTemplate>
		</Section>
	)
}

export default Details
