import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import DocumentationsForm from '../Form'

interface IEditDocumentationProps {
	documentation: Schema.DocumentationsEdit
}

const EditDocumentation = ({ documentation }: IEditDocumentationProps) => {
	const title = 'Edit Documentation'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Documentations', href: Routes.documentations() },
			{ title: Documentation, href: Routes.documentation(documentation.id) },
			{ title },
		] }>
			<Section>
				<Heading>{ title }</Heading>
				
				<DocumentationsForm
					method='put'
					to={ Routes.documentation() }
					documentation={ documentation }
				/>
			</Section>
		</Page>
	)
}

export default EditDocumentation
