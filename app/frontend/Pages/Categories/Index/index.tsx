import React from 'react'
import { Routes } from '@/lib'
import { Page, Table } from '@/Components'
import { TableTitleSection } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import CategoriesTable from '../Table'

interface ICategoriesIndexProps {
	categories: Schema.Category[]
	pagination: Schema.Pagination
}

const CategoriesIndex = ({ categories, pagination }: ICategoriesIndexProps) => {
	const title = 'Categories'

	return (
		<Page title={ title }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="categories"
					rows={ categories }
					pagination={ pagination }
				>
					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Category', href: Routes.newCategory(), icon: NewIcon },
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
