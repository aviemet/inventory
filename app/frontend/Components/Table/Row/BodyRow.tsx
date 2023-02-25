import React, { forwardRef } from 'react'
import { type ITableRow } from './index'
import { Box } from '@mantine/core'
import RowCheckbox from './RowCheckbox'
import { usePage } from '@inertiajs/react'
import { useTableContext } from '../TableContext'

interface IRowInContextProps extends ITableRow {
	name?: string
	rows?: Record<string, any>[]
	selectable: boolean
	selected: Set<string>
}

const RowInContext = forwardRef<HTMLTableRowElement, IRowInContextProps>((
	{ children, name, rows, selectable, selected, ...props },
	ref,
) => {
	const { props: { auth: { user: { table_preferences } } } } = usePage<SharedInertiaProps>()
	const { tableState: { model, columns } } = useTableContext()

	return (
		<Box component="tr" { ...props } ref={ ref }>
			{ selectable && <RowCheckbox name={ name || '' } selected={ selected } /> }
			{ children && children.filter((_, i) => {
				return !(
					columns[i]?.hideable && true &&
					model &&
					table_preferences?.[model]?.hide?.[columns[i].hideable]
				)
			}) }
		</Box>
	)
})

export default RowInContext
