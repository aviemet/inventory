import React from 'react'
import { Box, Table, type TableProps as MantineTableProps } from '@mantine/core'

import Head from './Head'
import Body from './Body'
import RowIterator from './RowIterator'
import Row from './Row'
import Cell from './Td'
import HeadCell from './Th'
import Footer from './Footer'
import Pagination from './Pagination'
import TableProvider from './TableContext'
import TableSection from './Section'
import SearchInput from './SearchInput'
import ConditionalWrapper from '../ConditionalWrapper'

import cx from 'clsx'
import * as classes from './Table.css'

export interface TableProps extends MantineTableProps {
	fixed?: boolean
	wrapper?: boolean
}

type TableComponent = ((props: TableProps) => JSX.Element)

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
	...props
}) => {
	return (
		<ConditionalWrapper
			condition={ wrapper }
			wrapper={ children => <Box className={ classes.wrapper }>{ children }</Box> }
		>
			<Table
				striped={ striped }
				highlightOnHover={ highlightOnHover }
				className={ cx(className, classes.table) }
				{ ...props }
			>
				{ children }
			</Table>
		</ConditionalWrapper>
	)
}

TableComponent.TableProvider = TableProvider
TableComponent.Section       = TableSection
TableComponent.SearchInput   = SearchInput
TableComponent.Head          = Head
TableComponent.HeadCell      = HeadCell
TableComponent.Body          = Body
TableComponent.Cell          = Cell
TableComponent.Row           = Row
TableComponent.RowIterator   = RowIterator
TableComponent.Footer        = Footer
TableComponent.Pagination    = Pagination

export default TableComponent
