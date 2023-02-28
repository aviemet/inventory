import React, { useMemo } from 'react'
import { packSx, Table, type Sx, type TableProps } from '@mantine/core'
import cx from 'clsx'
import useTableStyles from './useTableStyles'

import Head from './Head'
import Body from './Body'
import RowIterator from './RowIterator'
import Row from './Row'
import Cell from './Cell'
import Footer from './Footer'
import Pagination from './Pagination'
import TableProvider from './TableContext'
import TableSection from './Section'
import SearchInput from './SearchInput'
import ColumnPicker from './ColumnPicker'
import ConditionalWrapper from '../ConditionalWrapper'

export interface ITableProps extends TableProps {
	fixed?: boolean
	wrapper?: boolean
}

type TableComponent = (({ children, className, fixed, wrapper, ...props }: ITableProps) => JSX.Element)

type TableObjects = {
	Head: typeof Head
	Body: typeof Body
	RowIterator: typeof RowIterator
	Row: typeof Row
	Cell: typeof Cell
	Footer: typeof Footer
	Pagination: typeof Pagination
	TableProvider: typeof TableProvider
	Section: typeof TableSection
	SearchInput: typeof SearchInput
	ColumnPicker: typeof ColumnPicker
}

export type TableObject = TableComponent & TableObjects

const TableComponent: TableComponent & TableObjects = ({
	children,
	className,
	wrapper = true,
	fixed = false,
	striped = true,
	highlightOnHover = true,
	sx,
	...props
}) => {
	const { classes } = useTableStyles(fixed)

	const stylesArray = useMemo(() => {
		const arr: (Sx | undefined)[] = []
		if(wrapper) {
			arr.push({ thead: { top: -10 } })
		}
		if(sx) {
			arr.push(...packSx(sx))
		}
		return arr
	}, [wrapper, sx])

	return (
		<ConditionalWrapper
			condition={ wrapper }
			wrapper={ children => <div className={ classes.wrapper }>{ children }</div> }
		>
			<Table
				striped={ striped }
				highlightOnHover={ highlightOnHover }
				className={ cx(className, classes.table) }
				sx={ stylesArray }
				{ ...props }
			>
				{ children }
			</Table>
		</ConditionalWrapper>
	)
}

TableComponent.Head = Head
TableComponent.Body = Body
TableComponent.RowIterator = RowIterator
TableComponent.Row = Row
TableComponent.Cell = Cell
TableComponent.Footer = Footer
TableComponent.Pagination = Pagination
TableComponent.TableProvider = TableProvider
TableComponent.Section = TableSection
TableComponent.SearchInput = SearchInput
TableComponent.ColumnPicker = ColumnPicker

export default TableComponent
