import { Box, Table, type TableProps as MantineTableProps } from "@mantine/core"
import clsx from "clsx"

import { Body } from "./Body"
import { Footer } from "./Footer"
import { Head } from "./Head"
import { PaginationComponent as Pagination } from "./Pagination"
import { Row } from "./Row"
import { RowIterator } from "./RowIterator"
import { SearchInput } from "./SearchInput"
import { TableSection } from "./Section"
import { TableProvider } from "./TableContext"
import { RenderedCell as Cell } from "./Td"
import { RenderedCell as HeadCell } from "./Th"
import { ConditionalWrapper } from "../ConditionalWrapper"
import * as classes from "./Table.css"

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

const TableComponentBase: TableComponent = ({
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
				className={ clsx(className, classes.table) }
				{ ...props }
			>
				{ children }
			</Table>
		</ConditionalWrapper>
	)
}

export const TableComponent = Object.assign(TableComponentBase, {
	TableProvider,
	Section: TableSection,
	SearchInput,
	Head,
	HeadCell,
	Body,
	Cell,
	Row,
	RowIterator,
	Footer,
	Pagination,
}) as TableObject
