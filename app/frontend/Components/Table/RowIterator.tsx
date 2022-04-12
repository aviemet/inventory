import React from 'react'
import { useTableContext } from './TableContext'
import Row from './Row'
import classnames from 'classnames'

const RowIterator = ({ render }) => {
	const { tableState: { selected, rows } } = useTableContext()

	if(!rows || rows.length === 0) {
		return <Row />
	}

	const handleRowProps = row => {
		return React.cloneElement(
			row,
			{
				name: row.key,
				className: classnames(
					{ checked: selected.has(row.key) }
				)
			}
		)
	}

	return <>{ rows.map(row => handleRowProps(render(row))) }</>
}

export default RowIterator
