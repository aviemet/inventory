import { Table, type TableTheadProps } from "@mantine/core"
import clsx from "clsx"
import { forwardRef } from "react"

import { TableSectionContextProvider } from "../TableContext"
import * as classes from "./Head.css"

export const Head = forwardRef<HTMLTableSectionElement, TableTheadProps>((
	{ children, className, ...props },
	ref,
) => {
	return (
		<TableSectionContextProvider value={ { section: "head" } }>
			<Table.Thead
				ref={ ref }
				className={ clsx(className, classes.thead) }
				{ ...props }
			>
				{ children }
			</Table.Thead>
		</TableSectionContextProvider>
	)
})

Head.displayName = "Table.Head"
