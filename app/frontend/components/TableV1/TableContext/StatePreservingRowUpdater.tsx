import React, { useEffect } from "react"

import { useTableContext, type TableRowData } from "."

interface StatePreservingRowUpdaterProps {
	children: React.ReactElement
	rows?: readonly TableRowData[]
	pagination?: Schema.Pagination
}

/**
 * This component's purpose is to allow props to be updated upon an inertia page navigation while using { preserveState: true }
 * Without this explicitly updating rows with the fresh data response, the table wouldn't update with new rows
 * This allows both sorting and filtering to work properly without losing input focus
 */
export const StatePreservingRowUpdater = React.memo(({ children, rows, pagination }: StatePreservingRowUpdaterProps) => {
	const { setTableState, tableState } = useTableContext()

	useEffect(() => {
		if(!pagination) return

		setTableState({ rows, pagination })
		tableState.table.setOptions((prev) => ({
			...prev,
			data: rows as typeof prev.data,
			pageCount: pagination.pages,
			state: {
				...prev.state,
				pagination: {
					pageIndex: pagination.current_page - 1,
					pageSize: pagination.limit,
				},
			},
		}))
	}, [rows, pagination, setTableState, tableState.table])

	return <>{ children }</>
})
