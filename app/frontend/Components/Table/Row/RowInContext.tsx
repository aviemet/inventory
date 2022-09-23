import React, { useEffect, useState, forwardRef } from 'react'
import { useTableSectionContext } from '../TableContext'
import { type ITableRow } from './index'
import { Box } from '@mantine/core'
import HeadCheckbox from './HeadCheckbox'
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
	const { section } = useTableSectionContext()
	const [allChecked, setAllChecked] = useState(false)
	const [indeterminate, setIndeterminate] = useState(false)

	useEffect(() => {
		if(selectable && section === 'head' && rows !== undefined && rows.length > 0) {
			if(selected.size === rows.length) {
				setAllChecked(true)
				setIndeterminate(false)
			} else if(selected.size === 0) {
				setAllChecked(false)
				setIndeterminate(false)
			} else {
				if(!indeterminate) {
					setIndeterminate(true)
				}
			}
		}
	}, [selected.size])

	const Checkbox = () => {
		if(section === 'head') {
			return <HeadCheckbox rows={ rows } selected={ selected } allChecked={ allChecked } indeterminate={ indeterminate } />
		} else if(rows && rows.length > 0) {
			return <RowCheckbox name={ name || '' } selected={ selected } />
		} else {
			return <></>
		}
	}

	return (
		<Box component="tr" { ...props } ref={ ref }>
			{ selectable && <Checkbox /> }
			{ children }
		</Box>
	)
})

export default RowInContext
