import { DataTable } from "./DataTable"
import { Pagination } from "./Pagination"
import { SearchInput, AdvancedSearch, useAdvancedSearch, SearchDateInput, SearchDateTypeInput } from "./SearchInput"
import { Section } from "./Section"
import { useTableSectionContext } from "./TableContext"

export { DataTable, Section, SearchInput, AdvancedSearch, useAdvancedSearch, SearchDateInput, SearchDateTypeInput, useTableSectionContext, Pagination }
export type { TableDataTableProps } from "./DataTable"

export const Table = {
	DataTable,
	Section,
	SearchInput,
	Pagination,
} as const
