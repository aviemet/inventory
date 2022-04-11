import React, { useState, useEffect } from 'react'
import Cell from './Cell'
import { useTableContext, useTableSectionContext } from './TableContext'
import { TRProps } from 'react-html-props'

interface IRowProps extends TRProps {
	render?: any
	name?: string
}

const Row = ({ children, render, name, ...props }: IRowProps) => {
	const { tableState: { rows, selectable, selected } } = useTableContext()
	const { section } = useTableSectionContext()

	const Checkbox = section === 'head' ? HeadCheckbox : RowCheckbox

	return (
		<tr { ...props }>
			{ selectable && <Checkbox name={ name } rows={ rows } selected={ selected } /> }
			{ children }
		</tr>
	)
}

export default Row


const HeadCheckbox = ({ name, selected, rows }) => {
	const { setTableState } = useTableContext()
	const [checkState, setCheckState] = useState(false)

	const handleClick = e => {
		if(!rows || rows.length === 0) return

		if(selected.size === rows.length) {
			selected.clear()
		} else if(selected.size === 0) {
			rows.forEach(row => {
				selected.add(String(row.id))
			})
		}

		setTableState({ selected })
	}

	useEffect(() => {
		if(selected.size === rows.length) {
			setCheckState(true)
		} else if(selected.size === 0) {
			setCheckState(false)
		}
	}, [selected.size])

	return (
		<Cell checkbox>
			<input type="checkbox" onChange={ handleClick } checked={ checkState } />
		</Cell>
	)
}

const RowCheckbox = ({ name, selected, rows }) => {
	const { setTableState } = useTableContext()

	const handleClick = e => {
		const checked = e.target.checked
		if(checked) {
			selected.add(name)
		} else {
			selected.delete(name)
		}

		setTableState({ selected })
	}


	return (
		<Cell checkbox>
			<input type="checkbox" checked={ selected?.has(name) } onChange={ handleClick } />
		</Cell>
	)
}
