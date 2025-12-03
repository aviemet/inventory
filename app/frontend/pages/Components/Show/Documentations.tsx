import DocumentationTable, { documentationColumns } from "@/domains/Documentation/Table"
import ShowPageTableTemplate from "@/features/ShowPageTableTemplate"
import { type PaginatedModel } from "@/types/PaginatedModel"

import { ShowComponentProps } from "."

const Documentations = ({ component, documentations }: ShowComponentProps & { documentations?: PaginatedModel<Schema.DocumentationsIndex[]> }) => {
	return (
		<ShowPageTableTemplate
			title="Documentations"
			model="documentations"
			rows={ documentations?.data ?? component?.documentations ?? [] }
			columns={ documentationColumns }
			pagination={ documentations?.pagination ?? {
				current_page: 1,
				pages: 1,
				count: component?.documentations?.length ?? 0,
				limit: component?.documentations?.length ?? 0,
				next_page: 1,
				prev_page: 1,
				is_first_page: true,
				is_last_page: true,
			} }
		>
			<DocumentationTable
				records={ documentations?.data ?? component?.documentations ?? [] }
				pagination={ documentations?.pagination }
				model={ documentations ? "documentations" : undefined }
			/>
		</ShowPageTableTemplate>
	)
}

export default Documentations
