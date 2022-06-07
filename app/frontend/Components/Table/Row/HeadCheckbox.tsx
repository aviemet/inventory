import React, { useState, useEffect, useRef } from 'react'
import Cell from '../Cell'
import { useTableContext } from '../TableContext'

interface IRowCheckBox {
	selected: Set<string>
	rows?: Record<string,any>[]
}

const HeadCheckbox = ({ selected, rows }: IRowCheckBox) => {
	const { setTableState } = useTableContext()
	const [checkState, setCheckState] = useState(false)

	const checkboxRef = useRef<HTMLInputElement>(null)

	const handleClick = (e:  React.ChangeEvent<HTMLInputElement>) => {
		if(!rows || rows.length === 0) return

		if(selected.size === rows.length) {
			selected.clear()
		} else {
			rows.forEach(row => {
				selected.add(String(row.id))
			})
		}

		setTableState({ selected })
	}

	useEffect(() => {
		if(!rows || rows.length === 0) return

		if(selected.size === rows.length) {
			setCheckState(true)
		} else if(selected.size === 0) {
			setCheckState(false)
		} else {
			checkboxRef.current!.indeterminate = true
		}
	}, [selected.size])

	return (
		<Cell checkbox>
			<input type="checkbox" onChange={ handleClick } checked={ checkState } ref={ checkboxRef } />
		</Cell>
	)
}

export default HeadCheckbox
