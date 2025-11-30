import { Table, LoadingOverlay, type TableTbodyProps } from "@mantine/core"
import { forwardRef } from "react"

import { useTableContext, TableSectionContextProvider } from "./TableContext"

export const Body = forwardRef<HTMLTableSectionElement, TableTbodyProps>(({ children, ...props }, ref) => {
	const context = useTableContext(undefined, false)
	const searching = context?.searching ?? false

	return (
		<TableSectionContextProvider value={ { section: "body" } }>
			<Table.Tbody { ...props } ref={ ref }>
				{ searching && (
					<tr>
						<td colSpan={ 1000 }>
							<LoadingOverlay visible={ searching } overlayProps={ { blur: 1 } } />
						</td>
					</tr>
				) }
				{ children }
			</Table.Tbody>
		</TableSectionContextProvider>
	)
})

Body.displayName = "Table.Body"
