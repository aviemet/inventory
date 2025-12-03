import { Table, type TableTdProps } from "@mantine/core"
import { forwardRef } from "react"

export interface CellProps extends TableTdProps {
	children?: React.ReactNode
}

export const Cell = forwardRef<HTMLTableCellElement, CellProps>(({ children, ...props }, ref) => {
	return (
		<Table.Td { ...props } ref={ ref }>
			{ children }
		</Table.Td>
	)
})

Cell.displayName = "Table.Cell"
