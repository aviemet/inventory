import React from 'react'
import { Table, type TableProps } from '@mantine/core'
import cx from 'clsx'
import * as classes from './Table.css'

import Head from './Head'
import Body from './Body'
import RowIterator from './RowIterator'
import Row from './Row'
import Cell from './Cell'
import HeadCell from './Cell/HeadCell'
import Footer from './Footer'
import Pagination from './Pagination'
import TableProvider, { useTableContext } from './TableContext'
import TableSection from './Section'
import SearchInput from './SearchInput'
import ConditionalWrapper from '../ConditionalWrapper'

export interface ITableProps extends TableProps {
	fixed?: boolean
	wrapper?: boolean
}

type TableComponent = ((props: ITableProps) => JSX.Element)

type TableObjects = {
	Head: typeof Head
	Body: typeof Body
	RowIterator: typeof RowIterator
	Row: typeof Row
	Cell: typeof Cell
	HeadCell: typeof HeadCell
	Footer: typeof Footer
	Pagination: typeof Pagination
	TableProvider: typeof TableProvider
	Section: typeof TableSection
	SearchInput: typeof SearchInput
}

export type TableObject = TableComponent & TableObjects

const TableComponent: TableObject = ({
	children,
	className,
	wrapper = true,
	fixed = false,
	striped = true,
	highlightOnHover = true,
	style,
	...props
}) => {
	const tableState = useTableContext(false)

	return (
		<ConditionalWrapper
			condition={ wrapper }
			wrapper={ children => <div className={ classes.wrapper }>{ children }</div> }
		>
			{ /* TODO: Maybe a better way than forcing an entire context tree just for data-cell attributes? */ }
			<ConditionalWrapper
				condition={ tableState === null }
				wrapper={ children => <TableProvider>{ children }</TableProvider> }
			>
				<Table
					striped={ striped }
					highlightOnHover={ highlightOnHover }
					className={ cx(className, classes.table) }
					style={ [wrapper ? { thead: { top: -10 } } : undefined, style] }
					{ ...props }
				>
					{ children }
				</Table>
			</ConditionalWrapper>
		</ConditionalWrapper>
	)
}

TableComponent.Head = Head
TableComponent.Body = Body
TableComponent.RowIterator = RowIterator
TableComponent.Row = Row
TableComponent.Cell = Cell
TableComponent.HeadCell = HeadCell
TableComponent.Footer = Footer
TableComponent.Pagination = Pagination
TableComponent.TableProvider = TableProvider
TableComponent.Section = TableSection
TableComponent.SearchInput = SearchInput

export default TableComponent
