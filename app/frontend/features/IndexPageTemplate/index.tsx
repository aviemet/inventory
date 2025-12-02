import React from "react"

import { Page, Table } from "@/components"
import { type Breadcrumb } from "@/components/Breadcrumbs"
import { type TableRowData } from "@/components/Table/TableContext/TableContext"

import TableTitleSection, { IndexTableTitleSectionProps } from "../TableTitleSection"

interface IndexPageTemplateProps extends IndexTableTitleSectionProps {
	model: string
	rows: readonly TableRowData[]
	pagination: Schema.Pagination
	search?: boolean
	breadcrumbs?: Breadcrumb[]
	advancedSearch?: React.ReactNode
}

const IndexPageTemplate = ({
	children,
	title,
	model,
	rows,
	pagination,
	search = true,
	breadcrumbs,
	menuOptions,
	advancedSearch,
	deleteRoute,
}: IndexPageTemplateProps) => {
	return (
		<Page title={ title } breadcrumbs={ breadcrumbs ?? [
			{ title, href: window.location.href },
		] }>
			<Table.Section>
				<Table.TableProvider
					selectable
					model={ model }
					data={ rows }
					pagination={ pagination }
				>
					<TableTitleSection
						title={ title }
						menuOptions={ menuOptions }
						deleteRoute={ deleteRoute }
					>
						{ search && <Table.SearchInput advancedSearch={ advancedSearch } /> }
					</TableTitleSection>

					{ children }

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default IndexPageTemplate
