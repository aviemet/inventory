import React from 'react'
import { useTableContext } from '../TableContext'
import BodyCellWithContext from './BodyCellWithContext'
import { type ICellProps } from './index'

const BodyCell = ({ children, ...props }: ICellProps) => {
	try {
		const { tableState: { model } } = useTableContext()

		return (
			<BodyCellWithContext model={ model } { ...props }>
				{ children }
			</BodyCellWithContext>
		)
	} catch(e) {
		return <td { ...props }>{ children }</td>
	}
}

export default BodyCell
