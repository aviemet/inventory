import React from 'react'
import Cell from '../Cell'
import { Checkbox } from '@mantine/core'
import { useTableContext } from '../TableContext'

interface IRowCheckBox {
	selected: Set<string>
	rows?: Record<string,any>[]
	allChecked: boolean
	indeterminate: boolean
}

const HeadCheckbox = ({ selected, rows, allChecked, indeterminate }: IRowCheckBox) => {
	const { setTableState } = useTableContext()

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

	return (
		<Cell checkbox>
			<Checkbox onChange={ handleClick } checked={ allChecked } indeterminate={ indeterminate } />
		</Cell>
	)
}

export default React.memo(HeadCheckbox)
