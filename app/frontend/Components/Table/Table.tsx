import React from 'react'
import { Table, type TableProps } from '@mantine/core'

const TableComponent = ({ children, ...props }: TableProps) => {
	return (
		<Table { ...props }>
			{ children }
		</Table>
	)
}

export default TableComponent
