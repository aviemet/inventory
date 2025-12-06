import React from "react"

import { Page, Table } from "@/components"
import { type Breadcrumb } from "@/components/Breadcrumbs"

import TableTitleSection, { IndexTableTitleSectionProps } from "../TableTitleSection"

interface IndexPageTemplateProps extends IndexTableTitleSectionProps {
	model: string
	pagination: Schema.Pagination
	search?: boolean
	breadcrumbs?: Breadcrumb[]
	advancedSearch?: React.ReactNode
}

const IndexPageTemplate = ({
	children,
	title,
	model,
	search = true,
	breadcrumbs,
	menuOptions,
	advancedSearch,
	deleteRoute,
	selectedRecords = [],
}: IndexPageTemplateProps) => {
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
