import React from 'react'
import { useTableContext } from '../TableContext'
import { TRProps } from 'react-html-props'
import RowInContext from './RowInContext'

interface IRowProps extends Omit<TRProps, 'ref'> {
	render?: any
	name?: string
}

const Row = ({ children, render, name, ...props }: IRowProps) => {
	try{
		const { tableState: { rows, selectable, selected } } = useTableContext()

		return (
			<RowInContext name={ name } rows={ rows } selectable={ selectable } selected={ selected } { ...props }>
				{ children }
			</RowInContext>
		)
	} catch(e) {
		return (
			<tr { ...props }>
				{ children }
			</tr>
		)
	}
}

export default Row
