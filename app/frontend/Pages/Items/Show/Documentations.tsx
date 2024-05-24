import React from 'react'
import { Table } from '@/Components'
import DocumentationTable from '@/Pages/Documentation/Table'

interface ItemDocumentationProps {
	item: Schema.ItemsShow
}

const Documentations = ({ item }: ItemDocumentationProps) => {
	return (
		<Table.TableProvider
			selectable
			rows={ item?.documentations ?? [] }
		>
			<Table.SearchInput  />

			<DocumentationTable  />

		</Table.TableProvider>
	)
}

export default Documentations
