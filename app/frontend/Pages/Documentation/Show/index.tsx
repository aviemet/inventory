import React from 'react'
import { Container, Link } from '@/Components'
import { Routes } from '@/lib'

interface ShowDocumentationProps {
	documentation: Schema.Documentation
}

const ShowDocumentation = ({ documentation }: ShowDocumentationProps) => {
	return (
		<Container>
			<h1>Documentation</h1>

			<div>
				<Link href={ Routes.editDocumentation(documentation) }>Edit</Link>
				<Link href={ Routes.documentations() }>Index</Link>
			</div>
		</Container>
	)
}

export default ShowDocumentation
