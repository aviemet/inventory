import React from "react"
import { type ColumnDef } from "@tanstack/react-table"

import { type Icon } from "@/components/Icons"
import Table from "@/components/Table"
import { type TableRowData } from "@/components/Table/TableContext/TableContext"

import { TableTitleSection } from ".."

interface ShowPageTableTemplate {
	children: React.ReactNode
	title: string
	model: string
	rows: readonly TableRowData[]
	columns: ColumnDef<TableRowData>[]
	pagination: Schema.Pagination
	menuOptions?: {
		label: string
		href: string
		icon?: Icon
	}[]
}

const ShowPageTableTemplate = ({ children, model, rows, columns, pagination, title, menuOptions }: ShowPageTableTemplate) => {
	return (
		<Table.TableProvider
			selectable
			hideable
			model={ model }
			data={ rows }
			columns={ columns }
			pagination={ pagination }
		>
			<TableTitleSection title={ title } menuOptions={ menuOptions }>
				<Table.SearchInput />
			</TableTitleSection>

			{ children }

			<Table.Pagination />
		</Table.TableProvider>
	)
}

export default ShowPageTableTemplate
