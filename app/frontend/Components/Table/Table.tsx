import React, { useEffect } from 'react'
import classnames from 'classnames'
import { TableProps } from 'react-html-props'
import TableProvider, { useTableContext } from './TableContext'
import Pagination from './Pagination'

interface ITableProps extends TableProps {
	scroll?: boolean
	selectable?: boolean
	pagination?: Schema.Pagination
	fixed?: boolean
	rows?: Record<string,any>[]
}

const Table = ({
	children,
	scroll = false,
	selectable = false,
	pagination,
	fixed = false,
	rows = [],
	...props
}: ITableProps) => {
	return (
		<TableProvider selectable={ selectable } rows={ rows } pagination={ pagination }>
			<StatePreservingRowUpdater rows={ rows }>
				<div className={ classnames('h-full', { 'scroll-content': scroll }) }>
					<table
						className={ classnames(
							'shadow',
							{ 'table-fixed': fixed },
							{ 'table-auto': !fixed }
						) }
						{ ...props }
					>
						{ children }
					</table>
				</div>
				{ pagination && <Pagination /> }
			</StatePreservingRowUpdater>
		</TableProvider>
	)
}

/**
 * This component's purpose is to allow props to be updated upon an inertia page navigation while using { preserveState: true }
 * Without this explicitly updating rows with the fresh data response, the table wouldn't update with new rows
 * This allows both sorting and filtering to work properly without losing input focus
 */
const StatePreservingRowUpdater: React.FC<{ rows?: Record<string,any>[] }> = ({ children, rows }) => {
	const { setTableState } = useTableContext()

	useEffect(() => {
		setTableState({ rows })
	}, [rows])

	return <>{ children }</>
}

export default Table
