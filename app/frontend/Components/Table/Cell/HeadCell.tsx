import React from 'react'
import { useTableContext } from '../TableContext'
import HeadCellWithContext from './HeadCellWithContext'
import { Box } from '@mantine/core'
import { type ICellProps } from './index'

const HeadCell = ({ children, ...props }: ICellProps) => {
	const tableState = useTableContext(false)

	if(tableState === null) {
		return <Box component="th" { ...props }>{ children }</Box>
	}

	const { tableState: { rows } } = tableState

	return (
		<HeadCellWithContext { ...props } rows={ rows }>
			{ children }
		</HeadCellWithContext>
	)
}

export default HeadCell
