import { Table, type TableTfootProps } from "@mantine/core"
import { forwardRef } from "react"

import { TableSectionContextProvider } from "../TableContext"

export const Footer = forwardRef<HTMLTableSectionElement, TableTfootProps>(({ children, ...props }, ref) => {
	return (
		<TableSectionContextProvider value={ { section: "footer" } }>
			<Table.Tfoot { ...props } ref={ ref }>
				{ children }
			</Table.Tfoot>
		</TableSectionContextProvider>
	)
})

Footer.displayName = "Table.Footer"
