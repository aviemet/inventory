import React, { forwardRef } from 'react'
import { type ITableRow } from './index'
import { Box } from '@mantine/core'
import RowCheckbox from './RowCheckbox'

interface IRowInContextProps extends ITableRow {
	name?: string
	rows?: Record<string, any>[]
	selectable: boolean
	selected: Set<string>
}

const RowInContext = forwardRef<HTMLTableRowElement, IRowInContextProps>((
	{ children, name, rows, selectable, selected, ...props },
	ref
) => {
	return (
		<Box component="tr" { ...props } ref={ ref }>
			{ selectable && <RowCheckbox name={ name || '' } selected={ selected } /> }
			{ children }
		</Box>
	)
})

export default RowInContext
