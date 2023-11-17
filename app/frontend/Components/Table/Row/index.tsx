import React from 'react'
import { useTableContext } from '../TableContext'
import RowInContext from './RowInContext'
import { Box, type BoxProps } from '@mantine/core'

export interface ITableRow
	extends BoxProps,
	Omit<React.ComponentPropsWithoutRef<'tr'>, keyof BoxProps>
{
	children?:  JSX.Element | JSX.Element[]
}

interface IRowProps extends Omit<ITableRow, 'ref'> {
	render?: any
	name?: string
}

const Row = ({ children, render, name, ...props }: IRowProps) => {
	const tableState = useTableContext(false)

	if(tableState === null) {
		return (
			<Box component="tr" { ...props }>
				{ children }
			</Box>
		)
	}

	const { tableState: { rows, selectable, selected } } = tableState

	return (
		<RowInContext
			name={ name }
			rows={ rows }
			selectable={ selectable }
			selected={ selected }
			{ ...props }
		>
			{ children }
		</RowInContext>
	)
}

export default Row
