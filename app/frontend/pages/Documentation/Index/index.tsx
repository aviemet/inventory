import { NewIcon } from "@/components/Icons"
import DocumentationsTable, { documentationColumns } from "@/domains/Documentation/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface DocumentationIndexProps {
	documentations: Schema.DocumentationsIndex[]
	pagination: Schema.Pagination
}

const DocumentationsIndex = ({ documentations, pagination }: DocumentationIndexProps) => {
	return (
		<IndexPageTemplate
			title="Documentations"
			model="documentations"
			rows={ documentations }
			columns={ documentationColumns }
			pagination={ pagination }
			deleteRoute={ Routes.documentations() }
			menuOptions={ [
				{ label: "New Documentation", href: Routes.newDocumentation(), icon: <NewIcon /> },
			] }
		>
			<DocumentationsTable />
		</IndexPageTemplate>
	)
}

export default DocumentationsIndex
