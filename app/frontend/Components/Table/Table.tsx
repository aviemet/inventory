import React from 'react'
import classnames from 'classnames'
import { TableProps } from 'react-html-props'
import Pagination from './Pagination'

interface ITableProps extends TableProps {
	scroll?: boolean
	pagination?: Schema.Pagination
	fixed?: boolean
}

const Table = ({
	children,
	scroll = false,
	pagination,
	fixed = false,
	...props
}: ITableProps) => {
	return (
		<>
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
			<Pagination />
		</>
	)
}

export default Table
