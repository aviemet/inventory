import React from 'react'
import { Lazy, Page, Table } from '@/Components'
import { TableTitleSection } from '@/Features'
import { Routes } from '@/lib'

type TRecord = Schema.Accessory | Schema.Address | Schema.Component | Schema.Consumable | Schema.Contract | Schema.Email | Schema.Item | Schema.License | Schema.Phone | Schema.Vendor | Schema.Website

interface IShowCategoryProps {
	category: Schema.Category
	records: TRecord[]
	pagination: Schema.Pagination
}

const Show = ({ category, records, pagination }: IShowCategoryProps) => {
	const title = `Category: ${category.categorizable_type} - ${category.name}`

	const LazyTableComponent = Lazy.loadable(() => import(`../../${category.plural}/Table.tsx`))

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Categories', href: Routes.categories() },
			{ title: category.name! },
		] }>
			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model={ category.plural.toLocaleLowerCase() }
					rows={ records }
					pagination={ pagination }
				>
					<TableTitleSection
						title={ title }
						menuOptions={ [
							{ label: 'Edit Category', href: Routes.editCategory(category.slug) },
						] }
						deleteRoute={ Routes.categories() }
					>
						<Table.SearchInput />
					</TableTitleSection>

					<Lazy fallback={ <div>Loading</div> }>
						<LazyTableComponent />
					</Lazy>

					<Table.Pagination />

				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default Show
