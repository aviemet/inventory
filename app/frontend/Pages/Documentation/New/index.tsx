import React from 'react'
import { Container, Link } from '@/Components'
import { Routes } from '@/lib'
import Form from '../Form'

interface NewDocumentationProps {
	documentation: Schema.Documentation
}

const NewDocumentation = ({ documentation }: NewDocumentationProps) => {
	return (
		<Container>
			<h1>New Documentation</h1>

			<Form
				to={ Routes.documentations() }
				documentation={ documentation }
			/>

			<Link href={ Routes.documentations() }>Back to Documentations</Link>
		</Container>
	)
}

export default NewDocumentation
