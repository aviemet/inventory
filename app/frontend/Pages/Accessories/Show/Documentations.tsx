import React from 'react'
import { ShowAccessoryProps } from '.'
import { Table } from '@/Components'
import DocumentationTable from '@/Pages/Documentation/Table'

const Documentations = ({ accessory }: ShowAccessoryProps) => {
	return (
		<Table.TableProvider
			selectable
			rows={ accessory?.documentations ?? [] }
		>
			<Table.SearchInput  />

			<DocumentationTable  />
		</Table.TableProvider>
	)
}

export default Documentations
