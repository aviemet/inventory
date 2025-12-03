import { type DataTableColumn } from "mantine-datatable"
import React from "react"

import { Table } from "@/components"
import { type Icon } from "@/components/Icons"

import { TableTitleSection } from ".."

interface ShowPageTableTemplate<T = Record<string, unknown>> {
	children?: React.ReactNode
	title: string
	model: string
	rows: T[]
	columns: DataTableColumn<T>[]
	pagination: Schema.Pagination
	menuOptions?: {
		label: string
		href: string
		icon?: Icon
	}[]
}

const ShowPageTableTemplate = <T = Record<string, unknown>>({
	children,
	model,
	rows,
	columns,
	pagination,
	title,
	menuOptions }
: ShowPageTableTemplate<T>) => {
	return (
		<Table.Section>
			<TableTitleSection title={ title } menuOptions={ menuOptions }>
				<Table.SearchInput model={ model } />
			</TableTitleSection>

			{ children || (
				<Table.DataTable
					columns={ columns }
					records={ rows }
					pagination={ pagination }
					model={ model }
					selectable
				/>
			) }
		</Table.Section>
	)
}

export default ShowPageTableTemplate
