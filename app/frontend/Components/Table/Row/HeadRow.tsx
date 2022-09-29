import React, { useEffect, useState, forwardRef } from 'react'
import { type ITableRow } from './index'
import { Box } from '@mantine/core'
import HeadCheckbox from './HeadCheckbox'

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
	const [allChecked, setAllChecked] = useState(false)
	const [indeterminate, setIndeterminate] = useState(false)

	// Set the status of the table head checkbox
	useEffect(() => {
		if(!selectable || !rows) return

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
