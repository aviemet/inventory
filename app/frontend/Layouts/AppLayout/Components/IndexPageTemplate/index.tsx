import React from 'react'
import { Page, Table } from '@/Components'
import TableTitleSection from './TableTitleSection'
import { type TBreadcrumb } from '@/Components/Breadcrumbs'

interface IIndexPageTemplateProps {
	children: React.ReactNode
	title: string
	model: string
	rows: Record<string, any>[]
	pagination: Schema.Pagination
	search?: boolean
	breadcrumbs?: TBreadcrumb[]
	menuOptions?: {
		label: string
		href: string
		icon?: any
	}[]
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
}: IIndexPageTemplateProps) => {
	return (
		<Page title={ title } breadcrumbs={ breadcrumbs ?? [
			{ title, href: window.location.href },
		] }>
			<Table.Section>
				<Table.TableProvider
					selectable
					model={ model }
					rows={ rows }
					pagination={ pagination }
				>
					<TableTitleSection title={ title } menuOptions={ menuOptions }>
						{ search && <Table.SearchInput /> }
					</TableTitleSection>

					{ children }

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default IndexPageTemplate
