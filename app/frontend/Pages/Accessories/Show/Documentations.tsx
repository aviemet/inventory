import React from 'react'
import { ShowAccessoryProps } from '.'
import { Table } from '@/Components'
import DocumentationTable from '@/Pages/Documentation/Table'

const Documentations = ({ accessory, pagination }: ShowAccessoryProps) => {
	return (
		<Table.TableProvider
			selectable
			rows={ accessory?.documentations ?? [] }
			pagination={ pagination }
		>
			<Table.SearchInput  />

			<DocumentationTable  />

			<Table.Pagination />
		</Table.TableProvider>
	)
}

export default Documentations
