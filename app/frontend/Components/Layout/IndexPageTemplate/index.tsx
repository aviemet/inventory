import React from 'react'
import { Page, Table } from '@/Components'
import TableTitleSection from './TableTitleSection'

interface IIndexPageTemplateProps {
	children: React.ReactNode
	title: string
	model: string
	rows: Record<string, any>[]
	pagination: Schema.Pagination
	menuOptions?: {
		label: string
		href: string
		icon?: any
	}[]
}

const IndexPageTemplate = ({ children, title, model, rows, pagination, menuOptions }: IIndexPageTemplateProps) => {
	return (
		<Page title={ title }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model={ model }
					rows={ rows }
					pagination={ pagination }
				>
					<TableTitleSection title={ title } menuOptions={ menuOptions }>
						<Table.SearchInput />
					</TableTitleSection>

					{ children }

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default IndexPageTemplate
