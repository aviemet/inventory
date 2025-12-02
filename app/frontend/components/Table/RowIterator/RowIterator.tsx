import React from "react"

import { Cell } from "../Cell"
import { Row } from "../Row"
import { useTableContext, type TableRowData } from "../TableContext/TableContext"

interface RowIteratorProps<T extends TableRowData> {
	render: (row: T) => React.ReactElement
	emptyMessage?: string
	colSpan?: number
}

export function RowIterator<T extends TableRowData>({ render, emptyMessage = "Nothing to display", colSpan: colSpanProp }: RowIteratorProps<T>) {
	const context = useTableContext(false)

	if(!context) {
		return null
	}

	const { table, pagination } = context
	const rows = table.getRowModel().rows

	if(rows.length === 0) {
		const columnCount = table.getAllColumns().filter(col => col.getIsVisible()).length
		const colSpan = colSpanProp ?? (columnCount + (context.selectable ? 1 : 0))
		return (
			<Row>
				<Cell columnId="empty" colSpan={ colSpan } align="center">
					{ emptyMessage }
				</Cell>
			</Row>
		)
	}

	return (
		<>
			{ rows.map((row) => {
				const rowElement = render(row.original as T)
				const rowId = (row.original as { id?: unknown }).id
				const key: React.Key = rowId !== null ? String(rowId) : row.id
				return React.cloneElement(rowElement, { key } as Partial<React.HTMLAttributes<HTMLElement>>)
			}) }
		</>
	)
}

RowIterator.displayName = "Table.RowIterator"
