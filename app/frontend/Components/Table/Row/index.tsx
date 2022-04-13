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
	try{
		const { tableState: { rows, selectable, selected } } = useTableContext()
		return (
			<RowInContext name={ name } rows={ rows } selectable={ selectable } selected={ selected }>
				{ children }
			</RowInContext>
		)
	} catch(e) {
		return (
			<NormalRow name={ name }>
				{ children }
			</NormalRow>
		)
	}
}

export default Row

const RowInContext = ({ children, name, rows, selectable, selected, ...props }) => {
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

const NormalRow = ({ children,  ...props }) => {
	return (
		<tr { ...props }>
			{ children }
		</tr>
	)
}