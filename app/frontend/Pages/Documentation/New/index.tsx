import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import DocumentationForm from '../Form'

interface NewDocumentationProps {
	documentation: Schema.DocumentationsFormData
}

const NewDocumentation = ({ documentation }: NewDocumentationProps) => {
	const title = 'New Documentation'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Documentations', href: Routes.documentations() },
			{ title, href: window.location.href },
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
