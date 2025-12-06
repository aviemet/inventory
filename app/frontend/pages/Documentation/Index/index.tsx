import { NewIcon } from "@/components/Icons"
import DocumentationsTable from "@/domains/Documentation/Table"
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
			pagination={ pagination }
			deleteRoute={ Routes.documentations() }
			menuOptions={ [
				{ label: "New Documentation", href: Routes.newDocumentation(), icon: <NewIcon /> },
			] }
		>
			<DocumentationsTable records={ documentations } pagination={ pagination } model="documentations" />
		</IndexPageTemplate>
	)
}

export default DocumentationsIndex
