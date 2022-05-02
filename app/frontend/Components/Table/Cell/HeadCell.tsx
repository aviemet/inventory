import React from 'react'
import { useTableContext } from '../TableContext'
import CellWithContext from './CellWithContext'
import { type ICellProps } from './index'

const HeadCell = ({ children, ...props }: ICellProps) => {
	try {
		const { tableState: { rows } } = useTableContext()
		return <CellWithContext { ...props } rows={ rows }>{ children }</CellWithContext>
	} catch(e) {
		return <th { ...props }>{ children }</th>
	}
}

export default HeadCell
