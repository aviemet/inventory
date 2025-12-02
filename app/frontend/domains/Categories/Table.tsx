import { createColumnHelper } from "@tanstack/react-table"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.CategoriesIndex>()

export const categoriesColumns = [
	columnHelper.accessor("name", {
		header: "Name",
		enableSorting: true,
		meta: {
			model: "name",
			hideable: false,
		},
	}),
	columnHelper.accessor("categorizable_type", {
		id: "type",
		header: "Type",
		enableSorting: true,
		meta: {
			model: "categorizable_type",
			hideable: "type",
		},
	}),
	columnHelper.display({
		id: "qty",
		header: "Qty",
		enableSorting: false,
		meta: {
			hideable: "qty",
		},
	}),
	columnHelper.display({
		id: "actions",
		header: "Actions",
		enableSorting: false,
		meta: {
			hideable: false,
		},
	}),
]

const CategoriesTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="type" />
					<Table.HeadCell columnId="qty" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (category: Schema.CategoriesIndex) => (
					<Table.Row key={ category.id }>
						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.category(category.slug) }>{ category.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="type" nowrap>
							{ category.categorizable_type }
						</Table.Cell>

						<Table.Cell columnId="qty" nowrap>
							{ category.qty }
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editCategory(category.slug) } label={ category.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default CategoriesTable
