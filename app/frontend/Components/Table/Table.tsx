import React from 'react'
import cn from 'classnames'
import { TableProps } from 'react-html-props'

interface ITableProps extends TableProps {
	fixed?: boolean
}

const Table = ({ children, fixed = false, ...props }: ITableProps) => {
	return (
		<table
			className={ cn(
				'shadow',
				{ 'table-fixed': fixed },
				{ 'table-auto': !fixed }
			) }
			{ ...props }
		>
			{ children }
		</table>
	)
}

export default Table
