import { Table } from "@mantine/core"
import clsx from "clsx"
import React, { forwardRef } from "react"

import { Flex } from "@/components"
import { usePageProps } from "@/lib/hooks"

import * as classes from "./HeadCell.css"
import { useTableContext } from "../TableContext/TableContext"

export interface HeadCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
	columnId: string
	children?: React.ReactNode
	fitContent?: boolean
}

export const HeadCell = forwardRef<HTMLTableCellElement, HeadCellProps>(({
	columnId,
	children,
	fitContent = false,
	className,
	...props
}, ref) => {
	const context = useTableContext(false)
	const { auth: { user: { table_preferences } } } = usePageProps()

	if(!context) {
		return (
			<Table.Th
				ref={ ref }
				className={ clsx(className, { "table-column-fit": fitContent }) }
				{ ...props }
			>
				{ children }
			</Table.Th>
		)
	}

	const { table, model, pagination } = context

	let column
	try {
		column = table.getColumn(columnId)
	} catch{
		return (
			<Table.Th
				ref={ ref }
				className={ clsx(className, { "table-column-fit": fitContent }) }
				{ ...props }
			>
				{ children }
			</Table.Th>
		)
	}

	if(!column) {
		return null
	}

	const canSort = column.getCanSort()
	const isSorted = column.getIsSorted()
	const meta = (column.columnDef.meta || {}) as { model?: string }
	const hideableKey = meta.model || columnId
	const hiddenByUser = model && table_preferences?.[model]?.hide?.[hideableKey]

	if(hiddenByUser) return null

	const showSort = canSort && (!pagination || (pagination.count > 1))
	const sortDirection = isSorted === false ? undefined : (isSorted === "desc" ? "desc" : "asc")
	const headerDef = column.columnDef.header
	const headerText = typeof headerDef === "string" ? headerDef : (children || columnId)

	const handleSort = () => {
		column.toggleSorting(undefined, true)
	}

	return (
		<Table.Th
			ref={ ref }
			className={ clsx(
				className,
				classes.th,
				{ "table-column-fit": fitContent },
				{ "sortable": showSort },
				sortDirection,
			) }
			{ ...props }
		>
			<Flex align="center">
				{ showSort ?
					<button
						type="button"
						onClick={ handleSort }
						style={ {
							background: "none",
							border: "none",
							padding: 0,
							cursor: "pointer",
							width: "100%",
							textAlign: "left",
							display: "flex",
							alignItems: "center",
						} }
					>
						{ headerText }
					</button>
					:
					headerText
				}
			</Flex>
		</Table.Th>
	)
})

HeadCell.displayName = "Table.HeadCell"
