import React from 'react'
import { useTableContext, useTableSectionContext } from '../TableContext'
import { TRProps } from 'react-html-props'
import HeadCheckbox from './HeadCheckbox'
import RowCheckbox from './RowCheckbox'

interface IRowProps extends TRProps {
	render?: any
	name?: string
}

const Row = ({ children, render, name, ...props }: IRowProps) => {
	const { tableState: { rows, selectable, selected } } = useTableContext()
	const { section } = useTableSectionContext()

	const Checkbox = () => {
		if(section === 'head') {
			return <HeadCheckbox rows={ rows } selected={ selected } />
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

export default Row
