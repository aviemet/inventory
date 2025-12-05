import DocumentationTable from "@/domains/Documentation/Table"
import ShowPageTableTemplate from "@/features/ShowPageTableTemplate"
import { type PaginatedModel } from "@/types/PaginatedModel"

import { ShowAccessoryProps } from "."

const Documentations = ({ accessory, documentations }: ShowAccessoryProps & { documentations?: PaginatedModel<Schema.DocumentationsIndex[]> }) => {
	return (
		<ShowPageTableTemplate
			title="Documentations"
			model="documentations"
		>
			<DocumentationTable
				records={ documentations?.data ?? accessory?.documentations ?? [] }
				pagination={ documentations?.pagination }
				model={ documentations ? "documentations" : undefined }
			/>
		</ShowPageTableTemplate>
	)
}

export default Documentations
