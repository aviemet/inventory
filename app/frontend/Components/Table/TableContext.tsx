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
	rows?: Record<string,any>[]
	selected: Set<string>
}

interface ITableContext {
	tableState: ITableSettings
	setTableState: Function
}

interface ITableContextProviderProps {
	children: React.ReactNode
	selectable: boolean
	rows?: Record<string,any>[]
}

const [useTableContext, TableContextProvider] = createContext<ITableContext>()
export { useTableContext }

const TableProvider = ({ children, selectable = false, rows = [] }: ITableContextProviderProps) => {
	const tableReducer = (tableState: ITableSettings, newTableState: Partial<ITableSettings>) => ({
		...tableState,
		...newTableState,
	})

	const [tableState, setTableState] = useReducer(tableReducer, {
		selectable,
		rows,
		selected: new Set<string>()
	})

	return (
		<TableContextProvider value={ { tableState, setTableState } }>
			{ children }
		</TableContextProvider>
	)
}

export default TableProvider
