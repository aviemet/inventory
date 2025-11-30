import React, { useReducer } from "react"

import { createContext } from "@/lib/hooks"

export * from "./tableSectionContext"

export type TableRowData = { id?: unknown } | { [key: string]: unknown }

import { StatePreservingRowUpdater } from "./StatePreservingRowUpdater"

/**
 * Main Table Context
 */
interface TableState<T extends TableRowData = TableRowData> {
	/**
	 * Name of the ActiveRecord model being tabularized.
	 * Used to limit Inertia props reload using `only`, needs to match the incoming prop on the Component to be effective.
	 * Also used as a key for User `table_preferences` to save hidden columns and pagination limit.
	 **/
	model?: string
	selectable: boolean
	pagination?: Schema.Pagination
	rows?: readonly T[]
	columns: { hideable: string, label: string }[]
	selected: Set<string>
	hideable: boolean
	searching: boolean
}

interface TableContextProviderProps<T extends TableRowData = TableRowData> extends
	Partial<Pick<TableState<T>, "selectable" | "pagination" | "rows" | "hideable" | "model">> {
	children: React.ReactNode
}

interface TableContextValues<T extends TableRowData = TableRowData> {
	tableState: TableState<T>
	setTableState: Function
}

const [useTableContextBase, TableContextProvider] = createContext<TableContextValues<TableRowData>>()

function useTableContext<T extends TableRowData = TableRowData>(): TableContextValues<T>
function useTableContext<T extends TableRowData = TableRowData>(error: false): TableContextValues<T> | null
function useTableContext<T extends TableRowData = TableRowData>(error = true): TableContextValues<T> | null {
	const context = useTableContextBase(error)
	if(!context) {
		return null
	}
	return {
		tableState: {
			...context.tableState,
			rows: context.tableState.rows as readonly T[] | undefined,
		},
		setTableState: context.setTableState,
	}
}

export { useTableContext }

export function TableProvider<T extends TableRowData = TableRowData>({
	children,
	selectable = false,
	pagination,
	rows = [],
	hideable = true,
	model,
}: TableContextProviderProps<T>) {
	const [tableState, setTableState] = useReducer(
		(tableState: TableState<T>, newTableState: Partial<TableState<T>>) => {
			return ({
				...tableState,
				...newTableState,
			})
		},
		{
			selectable,
			rows,
			columns: [],
			pagination,
			selected: new Set<string>(),
			hideable,
			model,
			searching: false,
		},
	)

	const contextValue: TableContextValues<TableRowData> = {
		tableState: {
			...tableState,
			rows: tableState.rows,
		},
		setTableState,
	}

	return (
		<TableContextProvider value={ contextValue }>
			<StatePreservingRowUpdater rows={ rows } pagination={ pagination }>
				<>{ children }</>
			</StatePreservingRowUpdater>
		</TableContextProvider>
	)
}
