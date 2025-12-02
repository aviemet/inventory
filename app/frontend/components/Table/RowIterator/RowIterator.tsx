import React from "react"

import { Cell } from "../Cell"
import { Row } from "../Row"
import { useTableContext, type TableRowData } from "../TableContext/TableContext"

interface RowIteratorProps<T extends TableRowData> {
	render: (row: T) => React.ReactElement
	data?: readonly T[]
	emptyMessage?: string
	colSpan?: number
}

export function RowIterator<T extends TableRowData>({ render, data: dataProp, emptyMessage = "Nothing to display", colSpan: colSpanProp }: RowIteratorProps<T>) {
	const context = useTableContext(false)

	const data = dataProp ?? (context ? (context.pagination ? context.data : context.table.getRowModel().rows.map(row => row.original)) : [])

	if(!data || data.length === 0) {
		const contextColSpan = context ? (context.columns.size + (context.selectable ? 1 : 0)) : undefined
		const colSpan = colSpanProp ?? contextColSpan ?? 1
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
			{ data.map((row, index) => {
				const rowElement = render(row as T)
				const rowId = (row as { id?: unknown }).id
				const key: React.Key = rowId !== null ? String(rowId) : index
				return React.cloneElement(rowElement, { key } as Partial<React.HTMLAttributes<HTMLElement>>)
			}) }
		</>
	)
}

RowIterator.displayName = "Table.RowIterator"
