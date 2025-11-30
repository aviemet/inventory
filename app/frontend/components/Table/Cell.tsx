import { Table } from "@mantine/core"
import clsx from "clsx"
import React, { forwardRef } from "react"

import { usePageProps } from "@/lib/hooks"

import { useTableContext } from "./TableContext"

export interface CellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
	columnId: string
	children?: React.ReactNode
	fitContent?: boolean
	nowrap?: boolean
}

export const Cell = forwardRef<HTMLTableCellElement, CellProps>(({
	children,
	columnId,
	fitContent = false,
	nowrap = false,
	className,
	...props
}, ref) => {
	const { columns, model } = useTableContext()
	const { auth: { user: { table_preferences } } } = usePageProps()

	const column = columns.get(columnId)
	const hideableString = column?.hideable
	const hiddenByUser = hideableString && model && table_preferences?.[model]?.hide?.[hideableString]

	if(hiddenByUser) return null

	return (
		<Table.Td
			ref={ ref }
			className={ clsx(className, { "table-column-fit": fitContent }, { "nowrap": nowrap }) }
			data-cell={ column?.label }
			role="cell"
			{ ...props }
		>
			{ children }
		</Table.Td>
	)
})

Cell.displayName = "Table.Cell"
