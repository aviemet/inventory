import { Body } from "./Body"
import { Cell } from "./Cell"
import { Footer } from "./Footer"
import { Head } from "./Head"
import { HeadCell } from "./HeadCell"
import { Pagination } from "./Pagination"
import { Row } from "./Row"
import { RowIterator } from "./RowIterator"
import { SearchInput } from "./SearchInput"
import { Section } from "./Section"
import { Table as TableBase } from "./Table"
import { TableProvider } from "./TableContext/TableContext"

export const Table = Object.assign(TableBase, {
	Provider: TableProvider,
	TableProvider,
	Head,
	Body,
	Footer,
	Row,
	HeadCell,
	Cell,
	RowIterator,
	Pagination,
	Section,
	SearchInput,
})

export type { TableProps } from "./Table"
export type { HeadCellProps } from "./HeadCell"
export type { CellProps } from "./Cell"
export type { TableRowData } from "./TableContext/TableContext"
export { useAdvancedSearch, SearchDateInput, SearchDateTypeInput } from "./SearchInput"
