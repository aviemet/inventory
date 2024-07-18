import React, { useReducer } from 'react'
import { createContext } from '@/lib/hooks'
import StatePreservingRowUpdater from './StatePreservingRowUpdater'
export * from './tableSectionContext'

/**
 * Main Table Context
 */
interface TableState {
	/**
	 * Name of the ActiveRecord model being tabularized.
	 * Used to limit Inertia props reload using `only`, needs to match the incoming prop on the Component to be effective.
	 * Also used as a key for User `table_preferences` to save hidden columns and pagination limit.
	 **/
	model?: string
	selectable: boolean
	pagination?: Schema.Pagination
	rows?: Record<string,unknown>[]
	columns: { hideable: string, label: string }[]
	selected: Set<string>
	hideable: boolean
	searching: boolean
}

interface TableContextProviderProps extends
	Partial<Pick<TableState, 'selectable'|'pagination'|'rows'|'hideable'|'model'>>
{
	children: React.ReactNode
}

interface TableContextValues {
	tableState: TableState
	setTableState: Function
}

const [useTableContext, TableContextProvider] = createContext<TableContextValues>()
export { useTableContext }

const TableProvider = ({
	children,
	selectable = false,
	pagination,
	rows = [],
	hideable = true,
	model,
}: TableContextProviderProps) => {
	const [tableState, setTableState] = useReducer(
		(tableState: TableState, newTableState: Partial<TableState>) => {
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

	return (
		<TableContextProvider value={ { tableState, setTableState } }>
			<StatePreservingRowUpdater rows={ rows } pagination={ pagination }>
				<>{ children }</>
			</StatePreservingRowUpdater>
		</TableContextProvider>
	)
}


export default TableProvider
