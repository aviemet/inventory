import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import DocumentationForm from '../Form'

interface INewDocumentationProps {
	documentation: Schema.DocumentationsFormData
	categories: Schema.CategoriesOptions[]
}

const NewDocumentation = ({ ...data }: INewDocumentationProps) => {
	const title = 'New Documentation'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Documentations', href: Routes.documentations() },
			{ title: 'New Documentation' },
		] }>

			<Section>
				<Heading>{ title }</Heading>

				<DocumentationForm
					to={ Routes.documentations() }
					{ ...data }
				/>
			</Section>

		</Page>
	)
}

export default NewDocumentation
