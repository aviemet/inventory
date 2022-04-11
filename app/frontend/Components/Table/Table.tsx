import React, { forwardRef } from 'react'
import classnames from 'classnames'
import TableProvider from './TableContext'
import { TableProps } from 'react-html-props'

interface ITableProps extends TableProps {
	scroll?: boolean
	selectable?: boolean
	rows?: Record<string,any>[]
}

const Table = forwardRef<HTMLTableElement, ITableProps>(
	({ children, scroll = false, selectable = false, rows, ...props },
		ref
	) => {
		return (
			<TableProvider selectable={ selectable } rows={ rows }>
				<table className={ classnames({ 'scroll-content shadow': scroll }) } ref={ ref } { ...props }>
					{ children }
				</table>
			</TableProvider>
		)
	}
)

export default Table
