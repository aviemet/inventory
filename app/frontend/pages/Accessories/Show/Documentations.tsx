import DocumentationTable, { documentationColumns } from "@/domains/Documentation/Table"
import ShowPageTableTemplate from "@/features/ShowPageTableTemplate"
import { type PaginatedModel } from "@/types/PaginatedModel"

import { ShowAccessoryProps } from "."

const Documentations = ({ accessory, documentations }: ShowAccessoryProps & { documentations?: PaginatedModel<Schema.DocumentationsIndex[]> }) => {
	return (
		<ShowPageTableTemplate
			title="Documentations"
			model="documentations"
			rows={ documentations?.data ?? accessory?.documentations ?? [] }
			columns={ documentationColumns }
			pagination={ documentations?.pagination ?? {
				current_page: 1,
				pages: 1,
				count: accessory?.documentations?.length ?? 0,
				limit: accessory?.documentations?.length ?? 0,
				next_page: 1,
				prev_page: 1,
				is_first_page: true,
				is_last_page: true,
			} }
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
