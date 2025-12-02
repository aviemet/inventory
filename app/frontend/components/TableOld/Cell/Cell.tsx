import React, { forwardRef } from "react"

import { usePageProps } from "@/lib/hooks"

import { Td } from "./Td"
import { useTableContext } from "../TableContext/TableContext"

export interface CellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
	columnId?: string
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
	const context = useTableContext(false)

	if(!context || !columnId) {
		return (
			<Td
				ref={ ref }
				className={ className }
				fitContent={ fitContent }
				nowrap={ nowrap }
				{ ...props }
			>
				{ children }
			</Td>
		)
	}

	if(columnId === "empty") {
		return (
			<Td
				ref={ ref }
				className={ className }
				fitContent={ fitContent }
				nowrap={ nowrap }
				{ ...props }
			>
				{ children }
			</Td>
		)
	}

	const { table } = context

	let column
	try {
		column = table.getColumn(columnId)
	} catch{
		return (
			<Td
				ref={ ref }
				className={ className }
				fitContent={ fitContent }
				nowrap={ nowrap }
				{ ...props }
			>
				{ children }
			</Td>
		)
	}

	if(!column || !column.getIsVisible()) {
		return null
	}

	const header = column.columnDef.header
	const label = typeof header === "string" ? header : column.id

	return (
		<Td
			ref={ ref }
			className={ className }
			fitContent={ fitContent }
			nowrap={ nowrap }
			data-cell={ label }
			{ ...props }
		>
			{ children }
		</Td>
	)
})

Cell.displayName = "Table.Cell"
