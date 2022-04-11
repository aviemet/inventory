import React from 'react'
import { useTableContext } from './TableContext'
import Row from './Row'

const RowIterator = ({ render }) => {
	const { tableState: { selected, rows } } = useTableContext()

	if(!rows) return <Row />

	const handleRowProps = row => {
		const clone = React.cloneElement(row, { name: row.key })
		return clone
	}

	return (
		<>
			{ rows.map(row => handleRowProps(render(row))) }
		</>
	)
}

export default RowIterator
