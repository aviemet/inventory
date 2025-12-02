import { router } from "@inertiajs/react"
import {
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type Table as TanStackTable,
	type ColumnDef,
	type SortingState,
	type VisibilityState,
} from "@tanstack/react-table"
import axios from "axios"
import React, {
	useMemo,
	useEffect,
	useState,
} from "react"


import { Routes } from "@/lib"
import { createContext, useLocation, usePageProps } from "@/lib/hooks"

export type TableRowData = { id?: unknown } | { [key: string]: unknown }

interface TableContextValue {
	table: TanStackTable<TableRowData>
	data: readonly TableRowData[]
	model?: string
	pagination?: Schema.Pagination
	selectable: boolean
	selected: Set<string>
	setSelected: (selected: Set<string>) => void
	hideable: boolean
	searching: boolean
	setSearching: (searching: boolean) => void
}

const [useTableContextBase, TableContextProvider] = createContext<TableContextValue>()

const tableContexts = new Map<string, TableContextValue>()

export function useTableContext(): TableContextValue
export function useTableContext(contextKey: string): TableContextValue
export function useTableContext(required: false): TableContextValue | null
export function useTableContext(contextKey: string, required: false): TableContextValue | null
export function useTableContext(contextKeyOrRequired?: string | false, required?: boolean): TableContextValue | null {
	const isOptional = contextKeyOrRequired === false || required === false
	const context = useTableContextBase(!isOptional)

	if(typeof contextKeyOrRequired === "string") {
		const externalContext = tableContexts.get(contextKeyOrRequired)
		if(externalContext) {
			return externalContext
		}
		if(required === false) {
			return null
		}
		throw new Error(`Table context with key "${contextKeyOrRequired}" not found`)
	}

	return context
}

interface TableProviderProps<T extends TableRowData> {
	children: React.ReactNode
	data: readonly T[]
	columns: ColumnDef<T>[]
	pagination?: Schema.Pagination
	model?: string
	selectable?: boolean
	hideable?: boolean
	contextKey?: string
}

export function TableProvider<T extends TableRowData>({
	children,
	data,
	columns,
	pagination,
	model,
	selectable = false,
	hideable = true,
	contextKey,
}: TableProviderProps<T>) {
	const { params, pathname } = useLocation()
	const { auth: { user } } = usePageProps()
	const [selected, setSelected] = useState<Set<string>>(new Set())
	const [searching, setSearching] = useState(false)

	const paramsSort = params.get("sort")
	const paramsDirection = params.get("direction")
	const initialSorting: SortingState = useMemo(() => {
		if(paramsSort && paramsDirection) {
			return [{
				id: paramsSort,
				desc: paramsDirection === "desc",
			}]
		}
		return []
	}, [paramsSort, paramsDirection])

	const initialVisibility: VisibilityState = useMemo(() => {
		if(!model || !user?.table_preferences?.[model]?.hide || !columns) return {}
		const hidden = user.table_preferences[model].hide
		const visibility: VisibilityState = {}
		columns.forEach(col => {
			const meta = (col.meta || {}) as { model?: string }
			const hideableKey = meta.model || col.id
			if(hideableKey && hidden[hideableKey]) {
				visibility[col.id!] = false
			}
		})
		return visibility
	}, [model, user, columns])

	const [sorting, setSorting] = useState<SortingState>(initialSorting)
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(initialVisibility)

	useEffect(() => {
		if(paramsSort && paramsDirection) {
			setSorting([{
				id: paramsSort,
				desc: paramsDirection === "desc",
			}])
		} else {
			setSorting([])
		}
	}, [paramsSort, paramsDirection])

	const table = useReactTable<T>({
		data: data as T[],
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: pagination ? undefined : getPaginationRowModel(),
		getSortedRowModel: pagination ? undefined : getSortedRowModel(),
		manualPagination: !!pagination,
		manualSorting: !!pagination,
		enableSorting: true,
		enableColumnResizing: false,
		pageCount: pagination?.pages,
		state: {
			sorting,
			columnVisibility,
			pagination: pagination
				? {
					pageIndex: pagination.current_page - 1,
					pageSize: pagination.limit,
				}
				: {
					pageIndex: 0,
					pageSize: 25,
				},
		},
		onSortingChange: setSorting,
		onColumnVisibilityChange: (updater) => {
			setColumnVisibility(updater)
			if(!model || !user?.id || !columns) return

			const newVisibility = typeof updater === "function" ? updater(columnVisibility) : updater
			const hidden: Record<string, boolean> = {}
			Object.entries(newVisibility).forEach(([colId, visible]) => {
				if(!visible) {
					const column = columns.find(col => col.id === colId)
					const meta = (column?.meta || {}) as { model?: string }
					const hideableKey = meta.model || colId
					if(hideableKey) {
						hidden[hideableKey] = true
					}
				}
			})

			axios.patch(Routes.apiUpdateTablePreferences(user.id), {
				user: {
					table_preferences: {
						[model]: {
							hide: hidden,
						},
					},
				},
			}).then(() => {
				router.reload({ only: ["auth"] })
			})
		},
	})

	useEffect(() => {
		table.setOptions((prev) => ({
			...prev,
			data: data as T[],
			pageCount: pagination?.pages,
		}))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, pagination])

	const lastSyncedSort = React.useRef<string | null>(null)
	const isInitialMount = React.useRef(true)

	useEffect(() => {
		if(isInitialMount.current) {
			isInitialMount.current = false
			const currentSort = sorting[0]
			lastSyncedSort.current = currentSort ? `${currentSort.id}:${currentSort.desc ? "desc" : "asc"}` : null
			return
		}

		if(!pagination) return

		const currentSort = sorting[0]
		const sortKey = currentSort ? `${currentSort.id}:${currentSort.desc ? "desc" : "asc"}` : null

		if(sortKey === lastSyncedSort.current) {
			return
		}

		lastSyncedSort.current = sortKey

		const url = new URL(window.location.href)

		if(currentSort) {
			url.searchParams.set("sort", currentSort.id)
			url.searchParams.set("direction", currentSort.desc ? "desc" : "asc")
		} else {
			url.searchParams.delete("sort")
			url.searchParams.delete("direction")
		}

		const currentUrl = `${pathname}${url.search}`
		router.get(currentUrl, {}, {
			preserveState: true,
			preserveScroll: true,
			replace: true,
		})
	}, [sorting, pagination, pathname])

	const contextValue: TableContextValue = useMemo(() => ({
		table: (table as unknown) as TanStackTable<TableRowData>,
		data: data as readonly TableRowData[],
		model,
		pagination,
		selectable,
		selected,
		setSelected,
		hideable,
		searching,
		setSearching,
	}), [table, data, model, pagination, selectable, selected, hideable, searching])

	useEffect(() => {
		if(contextKey) {
			tableContexts.set(contextKey, contextValue)
			return () => {
				tableContexts.delete(contextKey)
			}
		}
	}, [contextKey, contextValue])

	return (
		<TableContextProvider value={ contextValue }>
			{ children }
		</TableContextProvider>
	)
}
