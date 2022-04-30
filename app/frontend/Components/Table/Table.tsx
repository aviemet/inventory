import React from 'react'
import cx from 'classnames'
import { TableProps } from 'react-html-props'

interface ITableProps extends TableProps {
	pagination?: Schema.Pagination
	fixed?: boolean
}

const Table = ({
	children,
	pagination,
	fixed = false,
	...props
}: ITableProps) => {
	return (
		<>
			<table
				className={ cx(
					'shadow',
					{ 'table-fixed': fixed },
					{ 'table-auto': !fixed }
				) }
				{ ...props }
			>
				{ children }
			</table>
		</>
	)
}

export default Table
