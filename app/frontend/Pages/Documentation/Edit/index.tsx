import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import DocumentationsForm from '../Form'

interface EditDocumentationProps {
	documentation: Schema.DocumentationsEdit
}

const EditDocumentation = ({ documentation }: EditDocumentationProps) => {
	const title = 'Edit Documentation'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Documentations', href: Routes.documentations() },
			{ title: documentation.title!, href: Routes.documentation(documentation.slug) },
			{ title, href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<DocumentationsForm
					method='put'
					to={ Routes.documentation(documentation.slug) }
					documentation={ documentation }
				/>
			</Section>
		</Page>
	)
}

export default EditDocumentation
