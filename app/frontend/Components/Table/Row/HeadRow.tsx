import React, { useEffect, useState, forwardRef } from 'react'
import { type ITableRow } from './index'
import { Box } from '@mantine/core'
import HeadCheckbox from './HeadCheckbox'
import { useTableContext } from '../TableContext'

interface IHeadRowProps extends ITableRow {
	name?: string
	rows?: Record<string, any>[]
	selectable: boolean
	selected: Set<string>
}

const HeadRow = forwardRef<HTMLTableRowElement, IHeadRowProps>((
	{ children, name, rows, selectable, selected, ...props },
	ref
) => {
	const { tableState: { columns }, setTableState } = useTableContext()

	const [allChecked, setAllChecked] = useState(false)
	const [indeterminate, setIndeterminate] = useState(false)

	// Set the status of the table head checkbox
	useEffect(() => {
		if(!selectable || !rows || rows.length === 0) return

		switch(selected.size) {
			case rows.length: // All checked
				setAllChecked(true)
				setIndeterminate(false)
				break
			case 0: // None checked
				setAllChecked(false)
				setIndeterminate(false)
				break
			default: // Some checked
				if(!indeterminate) setIndeterminate(true)
		}
	}, [selected.size])

	// Register hideable attributes in context
	useEffect(() => {
		if(!children) return

		children.forEach(({ props }, i) => {
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
