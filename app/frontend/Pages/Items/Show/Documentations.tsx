import React from 'react'
import { ShowItemProps } from '.'
import { Table } from '@/Components'
import DocumentationTable from '@/Pages/Documentation/Table'


const Documentations = ({ item, pagination }: ShowItemProps) => {
	return (
		<Table.TableProvider
			selectable
			rows={ item?.documentations ?? [] }
			pagination={ pagination }
		>
			<Table.SearchInput  />

			<DocumentationTable  />

			<Table.Pagination />
		</Table.TableProvider>
	)
}

export default Documentations
