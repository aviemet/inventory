import React from 'react'
import { useTableContext } from '../TableContext'
import { TRProps } from 'react-html-props'
import RowInContext from './RowInContext'
import { Box, type BoxProps } from '@mantine/core'

export interface ITableRow extends BoxProps, TRProps {}

interface IRowProps extends Omit<ITableRow, 'ref'> {
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
			<Box component="tr" { ...props }>
				{ children }
			</Box>
		)
	}
}

export default Row
