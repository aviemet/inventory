import DocumentationTable from "@/domains/Documentation/Table"
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
		>
			<DocumentationTable
				records={ documentations?.data ?? [] }
				pagination={ documentations?.pagination }
				model={ documentations ? "documentations" : undefined }
			/>
		</ShowPageTableTemplate>
	)
}

export default Documentations
