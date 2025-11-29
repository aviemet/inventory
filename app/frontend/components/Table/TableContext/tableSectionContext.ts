import { createContext } from '@/lib/hooks'

/**
 * Table Section Context
 * Used by Cell component to determine which tag to use
 */
interface TableSectionContextProvider {
	section: 'head' | 'body' | 'footer'
}

const [useTableSectionContext, TableSectionContextProvider] = createContext<TableSectionContextProvider>()
export { useTableSectionContext, TableSectionContextProvider }
