
import { Page, Table } from "@/components"
import { NewIcon } from "@/components/Icons"
import { TableTitleSection } from "@/features"
import { Routes } from "@/lib"

import CategoriesTable from "@/domains/Categories/Table"

interface CategoriesIndexProps {
	categories: Schema.CategoriesIndex[]
	pagination: Schema.Pagination
}

const CategoriesIndex = ({ categories, pagination }: CategoriesIndexProps) => {
	const title = "Categories"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Categories", href: Routes.categories() },
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
							{ label: "New Category", href: Routes.newCategory(), icon: <NewIcon /> },
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
