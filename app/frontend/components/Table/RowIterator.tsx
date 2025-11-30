import React from "react"

import { Cell } from "./Cell"
import { Row } from "./Row"
import { useTableContext, type TableRowData } from "./TableContext"

interface RowIteratorProps<T extends TableRowData> {
	render: (row: T) => React.ReactElement
}

export function RowIterator<T extends TableRowData>({ render }: RowIteratorProps<T>) {
	const { data, pagination, columns, selectable, table } = useTableContext()

	const displayData = pagination ? data : table.getRowModel().rows.map(row => row.original)

	if(displayData.length === 0) {
		const colSpan = columns.size + (selectable ? 1 : 0)
		return (
			<Row>
				<Cell columnId="empty" colSpan={ colSpan } align="center">
					Nothing to display
				</Cell>
			</Row>
		)
	}

	return (
		<>
			{ displayData.map((row, index) => {
				const rowElement = render(row as T)
				const rowId = (row as { id?: unknown }).id
				const key: React.Key = rowId !== null ? String(rowId) : index
				return React.cloneElement(rowElement, { key } as Partial<React.HTMLAttributes<HTMLElement>>)
			}) }
		</>
	)
}

RowIterator.displayName = "Table.RowIterator"
