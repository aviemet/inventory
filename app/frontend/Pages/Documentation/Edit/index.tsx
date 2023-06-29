import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import DocumentationsForm from '../Form'
import { omit } from 'lodash'

interface IEditDocumentationProps {
	documentation: Schema.DocumentationsEdit
}

const EditDocumentation = ({ documentation }: IEditDocumentationProps) => {
	const title = 'Edit Documentation'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Documentations', href: Routes.documentations() },
			{ title: documentation.title!, href: Routes.documentation(documentation.slug) },
			{ title },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<DocumentationsForm
					method='put'
					to={ Routes.documentation(documentation.slug) }
					documentation={
						omit(documentation, ['id', 'created_by'])
					}
				/>
			</Section>
		</Page>
	)
}

export default EditDocumentation
