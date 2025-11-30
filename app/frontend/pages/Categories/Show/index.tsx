import { Page, Table } from "@/components"
import AccessoriesTable from "@/domains/Accessories/Table"
import ComponentsTable from "@/domains/Components/Table"
import ConsumablesTable from "@/domains/Consumables/Table"
import ContractsTable from "@/domains/Contracts/Table"
import ItemsTable from "@/domains/Items/Table"
import LicensesTable from "@/domains/Licenses/Table"
import { TableTitleSection } from "@/features"
import { Routes } from "@/lib"

type CategoryRecord = Schema.Accessory | Schema.Address | Schema.Component | Schema.Consumable | Schema.Contract | Schema.Email | Schema.Item | Schema.License | Schema.Phone | Schema.Vendor | Schema.Website

interface ShowCategoryProps {
	category: Schema.CategoriesShow
	records: CategoryRecord[]
	pagination: Schema.Pagination
}

type TableComponentProps = React.ComponentProps<typeof ItemsTable>

const tableComponentMap: { [key: string]: React.ComponentType<TableComponentProps> } = {
	Accessories: AccessoriesTable,
	Components: ComponentsTable,
	Consumables: ConsumablesTable,
	Contracts: ContractsTable,
	Items: ItemsTable,
	Licenses: LicensesTable,
} as const

const Show = ({ category, records, pagination }: ShowCategoryProps) => {
	const title = `Category: ${category.categorizable_type} - ${category.name}`

	const TableComponent = tableComponentMap[category.plural]

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Categories", href: Routes.categories() },
			{ title: category.name, href: window.location.href },
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
							{ label: "Edit Category", href: Routes.editCategory(category.slug) },
						] }
						deleteRoute={ Routes.categories() }
					>
						<Table.SearchInput />
					</TableTitleSection>

					{ TableComponent && <TableComponent /> }

					<Table.Pagination />

				</Table.TableProvider>
			</Table.Section>
		</Page>
	)
}

export default Show
