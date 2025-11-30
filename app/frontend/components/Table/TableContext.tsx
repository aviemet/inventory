import {
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type Table as TanStackTable,
} from "@tanstack/react-table"
import React, { createContext,
	useContext,
	useMemo,
	useEffect,
	useRef,
} from "react"

export type TableRowData = { id?: unknown } | { [key: string]: unknown }

export { useTableSectionContext, TableSectionContextProvider } from "./TableContext/tableSectionContext"

export interface ColumnDefinition {
	id: string
	label: string
	hideable?: string
	sort?: string
}

interface TableContextValue {
	table: TanStackTable<TableRowData>
	data: readonly TableRowData[]
	columns: Map<string, ColumnDefinition>
	registerColumn: (column: ColumnDefinition) => void
	model?: string
	pagination?: Schema.Pagination
	selectable: boolean
	selected: Set<string>
	setSelected: (selected: Set<string>) => void
	hideable: boolean
	searching: boolean
	setSearching: (searching: boolean) => void
}

const TableContext = createContext<TableContextValue | null>(null)

const tableContexts = new Map<string, TableContextValue>()

export function useTableContext(contextKey?: string, required: boolean = true): TableContextValue | null {
	const context = useContext(TableContext)

	if(contextKey) {
		const externalContext = tableContexts.get(contextKey)
		if(externalContext) {
			return externalContext
		}
	}

	if(!context) {
		if(required) {
			throw new Error("useTableContext must be used within TableProvider")
		}
		return null
	}

	return context
}

interface TableProviderProps<T extends TableRowData> {
	children: React.ReactNode
	data: readonly T[]
	pagination?: Schema.Pagination
	model?: string
	selectable?: boolean
	hideable?: boolean
	contextKey?: string
}

export function TableProvider<T extends TableRowData>({
	children,
	data,
	pagination,
	model,
	selectable = false,
	hideable = true,
	contextKey,
}: TableProviderProps<T>) {
	const columnsRef = useRef(new Map<string, ColumnDefinition>())
	const [columns, setColumns] = React.useState<Map<string, ColumnDefinition>>(columnsRef.current)
	const [selected, setSelected] = React.useState<Set<string>>(new Set())
	const [searching, setSearching] = React.useState(false)

	const table = useReactTable<T>({
		data: data as T[],
		columns: [],
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: pagination ? undefined : getPaginationRowModel(),
		getSortedRowModel: pagination ? undefined : getSortedRowModel(),
		manualPagination: !!pagination,
		manualSorting: !!pagination,
		pageCount: pagination?.pages,
		initialState: {
			pagination: {
				pageIndex: 0,
				pageSize: 25,
			},
		},
		state: {
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
	})

	useEffect(() => {
		table.setOptions((prev) => ({
			...prev,
			data: data as T[],
			pageCount: pagination?.pages,
		}))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, pagination])

	const registerColumn = React.useCallback((column: ColumnDefinition) => {
		columnsRef.current.set(column.id, column)
		setColumns(new Map(columnsRef.current))
	}, [])

	const contextValue: TableContextValue = useMemo(() => ({
		table: (table as unknown) as TanStackTable<TableRowData>,
		data: data as readonly TableRowData[],
		columns,
		registerColumn,
		model,
		pagination,
		selectable,
		selected,
		setSelected,
		hideable,
		searching,
		setSearching,
	}), [table, data, columns, registerColumn, model, pagination, selectable, selected, hideable, searching])

	useEffect(() => {
		if(contextKey) {
			tableContexts.set(contextKey, contextValue)
			return () => {
				tableContexts.delete(contextKey)
			}
		}
	}, [contextKey, contextValue])

	return (
		<TableContext.Provider value={ contextValue }>
			{ children }
		</TableContext.Provider>
	)
}
