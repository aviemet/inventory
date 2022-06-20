import React from 'react'
import { useTableContext } from './TableContext'
import Row from './Row'
import cn from 'classnames'

const RowIterator = ({ render }: { render: (obj: any) => JSX.Element }) => {
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
					{ checked: selected.has(String(row.key!)) }
				)
			}
		)
	}

	return <>{ rows.map(row => handleRowProps(render(row))) }</>
}

export default React.memo(RowIterator)
