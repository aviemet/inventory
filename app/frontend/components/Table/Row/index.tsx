import { Table, type TableTrProps } from "@mantine/core"
import React from "react"

import { useTableContext, type TableRowData } from "../TableContext"
import RowInContext from "./RowInContext"

export interface TableRow extends TableTrProps {
	children?: JSX.Element | JSX.Element[]
}

export interface RowBaseProps extends TableRow {
	name?: string
	rows?: readonly TableRowData[]
	selectable: boolean
	selected: Set<string>
}

interface TableRowProps extends Omit<TableTrProps, "ref"> {
	render?: (obj: TableRowData) => JSX.Element
	name?: string
	children?: JSX.Element | JSX.Element[]
}

const Row = ({ children, render, name, ...props }: TableRowProps) => {
	const tableState = useTableContext(false)

	if(tableState === null) {
		return (
			<Table.Tr { ...props }>
				{ children }
			</Table.Tr>
		)
	}

	const { tableState: { rows, selectable, selected } } = tableState

	return (
		<RowInContext
			name={ name }
			rows={ rows }
			selectable={ selectable }
			selected={ selected }
			{ ...props }
		>
			{ children }
		</RowInContext>
	)
}

export default Row
