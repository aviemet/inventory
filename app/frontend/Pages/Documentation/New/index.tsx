import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import DocumentationForm from '../Form'

interface INewDocumentationProps {
	documentation: Schema.DocumentationsFormData
}

const NewDocumentation = ({ documentation }: INewDocumentationProps) => {
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
					documentation={ documentation }
				/>
			</Section>

		</Page>
	)
}

export default NewDocumentation
