import React, { useState } from "react"
import { type DataTableColumn } from "mantine-datatable"

import { Page, Table } from "@/components"
import { type Breadcrumb } from "@/components/Breadcrumbs"

import TableTitleSection, { IndexTableTitleSectionProps } from "../TableTitleSection"

interface IndexPageTemplateProps<T = Record<string, unknown>> extends Omit<IndexTableTitleSectionProps, "selectedRecords"> {
	model: string
	rows: readonly T[]
	columns: DataTableColumn<T>[]
	pagination: Schema.Pagination
	search?: boolean
	breadcrumbs?: Breadcrumb[]
	advancedSearch?: React.ReactNode
	selectable?: boolean
}

const IndexPageTemplate = <T = Record<string, unknown>>({
	children,
	title,
	model,
	rows,
	columns,
	pagination,
	search = true,
	breadcrumbs,
	menuOptions,
	advancedSearch,
	deleteRoute,
	selectable = true,
}: IndexPageTemplateProps<T>) => {
	const [selectedRecords, setSelectedRecords] = useState<T[]>([])

	return (
		<Page title={ title } breadcrumbs={ breadcrumbs ?? [
			{ title, href: window.location.href },
		] }>
			<Table.Section>
				<TableTitleSection
					title={ title }
					menuOptions={ menuOptions }
					deleteRoute={ deleteRoute }
					selectedRecords={ selectedRecords }
				>
					{ search && <Table.SearchInput model={ model } advancedSearch={ advancedSearch } /> }
				</TableTitleSection>

				{ children || (
					<Table.DataTable
						columns={ columns }
						records={ rows }
						pagination={ pagination }
						model={ model }
						selectable={ selectable }
						onSelectedRecordsChange={ setSelectedRecords }
					/>
				) }
			</Table.Section>
		</Page>
	)
}

export default IndexPageTemplate
