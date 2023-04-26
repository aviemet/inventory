import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import DocumentationsTable from '../Table'

interface IDocumentationIndexProps {
	documentations: Schema.DocumentationsIndex[]
	pagination: Schema.Pagination
}

const DocumentationsIndex = ({ documentations, pagination }: IDocumentationIndexProps) => {
	return (
		<IndexPageTemplate
			title="Documentations"
			model="documentations"
			rows={ documentations }
			pagination={ pagination }
			deleteRoute={ Routes.documentations() }
			menuOptions={ [
				{ label: 'New Documentation', href: Routes.newDocumentation(), icon: NewIcon },
			] }
		>
			<DocumentationsTable />
		</IndexPageTemplate>
	)
}

export default DocumentationsIndex
