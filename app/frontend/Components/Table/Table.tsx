import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { createContext } from '../Hooks'
import { TableProps } from 'react-html-props'

interface ITableProps extends TableProps {
	scroll?: boolean
}

const [useTableContext, TableContextProvider] = createContext()
export { useTableContext }

const [useTableSectionContext, TableSectionContextProvider] = createContext<Record<string,string>>()
export { useTableSectionContext, TableSectionContextProvider }

const Table = forwardRef<HTMLTableElement, ITableProps>(({ children, scroll = false, ...props }, ref) => {
	return (
		<TableContextProvider value={ { } }>
			<table className={ classnames({ 'scroll-content shadow': scroll }) } ref={ ref } { ...props }>
				{ children }
			</table>
		</TableContextProvider>
	)
})

export default Table
