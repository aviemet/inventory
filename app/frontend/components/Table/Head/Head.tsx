import { Table, type TableTheadProps } from "@mantine/core"
import { forwardRef } from "react"

import { TableSectionContextProvider } from "../TableContext"

export const Head = forwardRef<HTMLTableSectionElement, TableTheadProps>((
	{ children, ...props },
	ref,
) => {
	return (
		<TableSectionContextProvider value={ { section: "head" } }>
			<Table.Thead ref={ ref } { ...props }>
				{ children }
			</Table.Thead>
		</TableSectionContextProvider>
	)
})

Head.displayName = "Table.Head"
