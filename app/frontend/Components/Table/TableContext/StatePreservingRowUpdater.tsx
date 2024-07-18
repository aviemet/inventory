import React, { useEffect } from 'react'
import { useTableContext } from '.'

interface StatePreservingRowUpdaterProps {
	children: React.ReactElement
	rows?: Record<string,any>[]
	pagination?: Schema.Pagination
}

/**
 * This component's purpose is to allow props to be updated upon an inertia page navigation while using { preserveState: true }
 * Without this explicitly updating rows with the fresh data response, the table wouldn't update with new rows
 * This allows both sorting and filtering to work properly without losing input focus
 */
const StatePreservingRowUpdater = React.memo(({ children, rows, pagination }: StatePreservingRowUpdaterProps) => {
	const { setTableState } = useTableContext()

	useEffect(() => {
		if(!pagination) return

		setTableState({ rows, pagination })
	}, [rows, pagination, setTableState])

	return <>{ children }</>
})

export default StatePreservingRowUpdater
