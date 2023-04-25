import React from 'react'
import { Link } from '@/Components'
import { Routes } from '@/lib'
import Table from '../Table'

interface DocumentationIndexProps {
	documentations: Schema.Documentation
}

const DocumentationIndexProps = ({ documentations }: DocumentationIndexProps) => {
	return (
		<div>
			<h1>Documentations</h1>

			<Table documentations={ documentations } />

			<Link href={ Routes.newDocumentation() }>New Documentation</Link>
		</div>
	)
}

export default DocumentationIndexProps
