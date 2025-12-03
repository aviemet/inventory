import DocumentationTable, { documentationColumns } from "@/domains/Documentation/Table"
import ShowPageTableTemplate from "@/features/ShowPageTableTemplate"
import { type PaginatedModel } from "@/types/PaginatedModel"

interface PersonDocumentationProps {
	person: Schema.PeopleShow
	documentations?: PaginatedModel<Schema.DocumentationsIndex[]>
}

const Documentations = ({ person, documentations }: PersonDocumentationProps) => {
	return (
		<ShowPageTableTemplate
			title="Documentations"
			model="documentations"
			rows={ documentations?.data ?? person?.documentations ?? [] }
			columns={ documentationColumns }
			pagination={ documentations?.pagination ?? {
				current_page: 1,
				pages: 1,
				count: person?.documentations?.length ?? 0,
				limit: person?.documentations?.length ?? 0,
				next_page: 1,
				prev_page: 1,
				is_first_page: true,
				is_last_page: true,
			} }
		>
			<DocumentationTable
				records={ documentations?.data ?? person?.documentations ?? [] }
				pagination={ documentations?.pagination }
				model={ documentations ? "documentations" : undefined }
			/>
		</ShowPageTableTemplate>
	)
}

export default Documentations
