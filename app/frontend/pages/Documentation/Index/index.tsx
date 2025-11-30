import React from "react"

import { NewIcon } from "@/components/Icons"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import DocumentationsTable from "../Table"

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
