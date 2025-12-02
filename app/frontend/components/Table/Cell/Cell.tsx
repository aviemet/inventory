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
	const { auth: { user: { table_preferences } } } = usePageProps()

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

	const { columns, model } = context
	const column = columns.get(columnId)
	const hideableString = column?.hideable
	const hiddenByUser = hideableString && model && table_preferences?.[model]?.hide?.[hideableString]

	if(hiddenByUser) return null

	return (
		<Td
			ref={ ref }
			className={ className }
			fitContent={ fitContent }
			nowrap={ nowrap }
			data-cell={ column?.label }
			{ ...props }
		>
			{ children }
		</Td>
	)
})

Cell.displayName = "Table.Cell"
