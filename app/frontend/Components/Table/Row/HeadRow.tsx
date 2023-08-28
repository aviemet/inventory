import React, { useEffect, forwardRef } from 'react'
import { type ITableRow } from './index'
import { Box } from '@mantine/core'
import HeadCheckbox from './HeadCheckbox'
import { useTableContext } from '../TableContext'
import { useCheckboxState } from '@/lib/hooks'
import { coerceArray } from '../../../lib/index'

interface IHeadRowProps extends ITableRow {
	name?: string
	rows?: Record<string, any>[]
	selectable: boolean
	selected: Set<string>
}

const HeadRow = forwardRef<HTMLTableRowElement, IHeadRowProps>((
	{ children, name, rows, selectable, selected, ...props },
	ref,
) => {
	const { tableState: { columns }, setTableState } = useTableContext()

	let { length, selectedCount } = { length: 0, selectedCount: 0 }
	if(selectable) {
		length = rows?.length || 0
		selectedCount = selected.size || 0
	}
	const { allChecked, indeterminate } = useCheckboxState(length, selectedCount)

	// Register hideable attributes in context
	useEffect(() => {
		if(!children) return

		coerceArray(children).forEach(({ props }, i) => {
			const hideable = (props.hideable ?? props.sort) ?? false
			columns[i] = { label: props.children, hideable }
		})
		setTableState({ columns })
	}, [])

	return (
		<Box component="tr" { ...props } ref={ ref }>
			{ selectable && <HeadCheckbox
				rows={ rows }
				selected={ selected }
				allChecked={ allChecked }
				indeterminate={ indeterminate }
			/> }
			{ children }
		</Box>
	)
})

export default HeadRow
