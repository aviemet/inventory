import React, { useEffect, useState } from 'react'
import { useTableSectionContext } from '../TableContext'
import { TRProps } from 'react-html-props'
import HeadCheckbox from './HeadCheckbox'
import RowCheckbox from './RowCheckbox'

interface IRowInContextProps extends TRProps {
	name?: string
	rows?: Record<string, any>[]
	selectable: boolean
	selected: Set<string>
}

const RowInContext = ({ children, name, rows, selectable, selected, ...props }: IRowInContextProps) => {
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
		<tr { ...props }>
			{ selectable && <Checkbox /> }
			{ children }
		</tr>
	)
}

export default RowInContext
