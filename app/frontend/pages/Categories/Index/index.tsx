import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/components'
import { TableTitleSection } from '@/features'
import { NewIcon } from '@/components/Icons'
import CategoriesTable from '../Table'

interface CategoriesIndexProps {
	categories: Schema.CategoriesIndex[]
	pagination: Schema.Pagination
}

const CategoriesIndex = ({ categories, pagination }: CategoriesIndexProps) => {
	const title = 'Categories'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Categories', href: Routes.categories() },
		] }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="categories"
					rows={ categories }
					pagination={ pagination }
				>
					<TableTitleSection title={ title }
						deleteRoute={ Routes.categories() }
						menuOptions={ [
							{ label: 'New Category', href: Routes.newCategory(), icon: <NewIcon /> },
						] }>
						<Table.SearchInput />
					</TableTitleSection>

					<CategoriesTable />

					<Table.Pagination />

				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default CategoriesIndex
