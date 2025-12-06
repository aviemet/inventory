import DocumentationTable from "@/domains/Documentation/Table"
import ShowPageTableTemplate from "@/features/ShowPageTableTemplate"
import { type PaginatedModel } from "@/types/PaginatedModel"

import { ShowConsumableProps } from "."

const Documentations = ({ consumable, documentations }: ShowConsumableProps & { documentations?: PaginatedModel<Schema.DocumentationsIndex[]> }) => {
	return (
		<ShowPageTableTemplate
			title="Documentations"
			model="documentations"
		>
			<DocumentationTable
				records={ documentations?.data ?? consumable?.documentations ?? [] }
				pagination={ documentations?.pagination }
				model={ documentations ? "documentations" : undefined }
			/>
		</ShowPageTableTemplate>
	)
}

export default Documentations
