import { type DataTableColumn } from "mantine-datatable"
import React from "react"

import { Page, Table } from "@/components"
import { type Breadcrumb } from "@/components/Breadcrumbs"

import TableTitleSection, { IndexTableTitleSectionProps } from "../TableTitleSection"

interface IndexPageTemplateProps<T = Record<string, unknown>> extends IndexTableTitleSectionProps {
	model: string
	rows: T[]
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
	selectedRecords = [],
}: IndexPageTemplateProps<T>) => {
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

				{ children }
			</Table.Section>
		</Page>
	)
}

export default IndexPageTemplate
