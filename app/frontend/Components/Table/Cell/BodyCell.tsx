import React from 'react'
import { useTableContext } from '../TableContext'
import BodyCellWithContext from './BodyCellWithContext'
import { Box } from '@mantine/core'
import { type ICellProps } from './index'

const BodyCell = ({ children, ...props }: ICellProps) => {
	const tableState = useTableContext(false)

	if(tableState === null) {
		return <Box component="td" { ...props }>{ children }</Box>
	}

	const { tableState: { model } } = tableState

	return <BodyCellWithContext model={ model } { ...props }>
		{ children }
	</BodyCellWithContext>

}

export default BodyCell
