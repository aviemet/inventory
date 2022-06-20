import React from 'react'
import { useTableContext } from '../TableContext'
import HeadCellWithContext from './HeadCellWithContext'
import { type ICellProps } from './index'

const HeadCell = ({ children, ...props }: ICellProps) => {
	try {
		const { tableState: { rows } } = useTableContext()

		return (
			<HeadCellWithContext { ...props } rows={ rows }>
				{ children }
			</HeadCellWithContext>
		)
	} catch(e) {
		return <th { ...props }>{ children }</th>
	}
}

export default React.memo(HeadCell)
