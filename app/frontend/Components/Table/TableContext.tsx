import React, { useReducer } from 'react'
import { createContext } from '../Hooks'

/**
 * Table Section Context
 */
interface ITableSectionContextProvider {
	section: 'head'|'body'|'footer'
}

const [useTableSectionContext, TableSectionContextProvider] = createContext<ITableSectionContextProvider>()
export { useTableSectionContext, TableSectionContextProvider }

/**
 * Main Table Context
 */
interface ITableSettings {
	selectable: boolean
	pagination?: Schema.Pagination
	rows?: Record<string,any>[]
	selected: Set<string>
	url: {
		base: string
		params: URLSearchParams
	}
}

interface ITableContext {
	tableState: ITableSettings
	setTableState: Function
}

interface ITableContextProviderProps {
	children: React.ReactNode
	selectable: boolean
	pagination?: Schema.Pagination
	rows?: Record<string,any>[]
}

const [useTableContext, TableContextProvider] = createContext<ITableContext>()
export { useTableContext }

const TableProvider = ({
	children,
	selectable = false,
	pagination,
	rows = []
}: ITableContextProviderProps) => {
	const tableReducer = (tableState: ITableSettings, newTableState: Partial<ITableSettings>) => ({
		...tableState,
		...newTableState,
	})

	const { origin, pathname, search } = window.location
	const params = new URLSearchParams(search)

	const [tableState, setTableState] = useReducer(tableReducer, {
		selectable,
		rows,
		pagination,
		selected: new Set<string>(),
		url: {
			base: `${origin}${pathname}`,
			params
		}
	})

	return (
		<TableContextProvider value={ { tableState, setTableState } }>
			{ children }
		</TableContextProvider>
	)
}

export default TableProvider
