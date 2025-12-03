import React, { useState, useCallback } from "react"

import { createContext } from "@/lib/hooks"

interface TableContextValue<T = Record<string, unknown>> {
	model?: string
	searching: boolean
	setSearching: (searching: boolean) => void
	records?: readonly T[]
	columns?: Array<{ accessor: string; title: string }>
	pagination?: Schema.Pagination
}

const [useTableContext, TableContextProvider] = createContext<TableContextValue>()

export { useTableContext }

interface TableProviderProps<T = Record<string, unknown>> {
	children: React.ReactNode
	model?: string
	records?: readonly T[]
	columns?: Array<{ accessor: string; title: string }>
	pagination?: Schema.Pagination
}

export function TableProvider<T = Record<string, unknown>>({
	children,
	model,
	records,
	columns,
	pagination,
}: TableProviderProps<T>) {
	const [searching, setSearching] = useState(false)

	const handleSetSearching = useCallback((value: boolean) => {
		setSearching(value)
	}, [])

	return (
		<TableContextProvider value={ {
			model,
			searching,
			setSearching: handleSetSearching,
			records,
			columns,
			pagination,
		} }>
			{ children }
		</TableContextProvider>
	)
}
