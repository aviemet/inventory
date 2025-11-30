import clsx from "clsx"
import { cloneElement } from "react"

import { Row } from "./Row"
import { useTableContext, type TableRowData } from "./TableContext"
import { RenderedCell as Cell } from "./Td"

interface RowIteratorProps<T extends TableRowData = TableRowData> {
	render: (obj: T) => JSX.Element
}

export function RowIterator<T extends TableRowData = TableRowData>({ render }: RowIteratorProps<T>) {
	const { tableState: { selected, rows, columns, selectable } } = useTableContext<T>()

	if(!rows || rows.length === 0) {
		const colSpan = columns.length + (selectable ? 1 : 0)

		return (
			<Row>
				<Cell colSpan={ colSpan } align="center">
					Nothing to display
				</Cell>
			</Row>
		)
	}

	const injectRowProps = (row: JSX.Element) => {
		return cloneElement(row, {
			name: row.key,
			className: clsx(
				{ checked: selected.has(String(row.key!)) },
			),
		})
	}

	return <>{ rows.map(row => injectRowProps(render(row))) }</>
}
