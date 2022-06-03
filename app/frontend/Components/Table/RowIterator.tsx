import React from 'react'
import { useTableContext } from './TableContext'
import Row from './Row'
import cn from 'classnames'

interface IRowIteratorProps {
	render: (row: any) => JSX.Element
}

const RowIterator = ({ render }: IRowIteratorProps) => {
	const { tableState: { selected, rows } } = useTableContext()

	if(!rows || rows.length === 0) {
		return <Row />
	}

	const handleRowProps = (row: JSX.Element) => {
		return React.cloneElement(
			row,
			{
				name: row.key,
				className: cn(
					{ checked: selected.has(row.key) }
				)
			}
		)
	}

	return <>{ rows.map(row => handleRowProps(render(row))) }</>
}

export default RowIterator
