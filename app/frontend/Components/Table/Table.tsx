import React, { useEffect } from 'react'
import classnames from 'classnames'
import { TableProps } from 'react-html-props'
import TableProvider, { useTableContext } from './TableContext'

interface ITableProps extends TableProps {
	scroll?: boolean
	selectable?: boolean
	fixed?: boolean
	rows?: Record<string,any>[]
}

const Table = ({
	children,
	scroll = false,
	fixed = false,
	selectable = false,
	rows = [],
	...props
}: ITableProps) => {
	return (
		<TableProvider selectable={ selectable } rows={ rows }>
			<StatePreservingRowUpdater rows={ rows }>
				<div className={ classnames({ 'scroll-content': scroll }) }>
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
