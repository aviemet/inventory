import { createColumnHelper } from "@tanstack/react-table"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.ModelsIndex>()

export const modelsColumns = [
	columnHelper.accessor("name", {
		header: "Name",
		enableSorting: true,
		meta: {
			model: "name",
			hideable: false,
		},
	}),
	columnHelper.accessor("model_number", {
		header: "Model #",
		enableSorting: true,
		meta: {
			model: "model_number",
			hideable: "model_number",
		},
	}),
	columnHelper.accessor(row => row.category?.name, {
		id: "category",
		header: "Category",
		enableSorting: true,
		meta: {
			model: "category.name",
			hideable: "category",
		},
	}),
	columnHelper.accessor(row => row.manufacturer?.name, {
		id: "manufacturer",
		header: "Manufacturer",
		enableSorting: true,
		meta: {
			model: "manufacturer.name",
			hideable: "manufacturer",
		},
	}),
	columnHelper.accessor("count", {
		header: "#",
		enableSorting: true,
		meta: {
			model: "count",
			hideable: "count",
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

const ModelsTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="model_number" />
					<Table.HeadCell columnId="category" />
					<Table.HeadCell columnId="manufacturer" />
					<Table.HeadCell columnId="count" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (model: Schema.ModelsIndex) => (
					<Table.Row key={ model.id }>
						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.model(model.slug) }>{ model.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="model_number" nowrap>
							<Link href={ Routes.model(model.slug) }>{ model.model_number }</Link>
						</Table.Cell>

						<Table.Cell columnId="category">
							{ model.category && <Link href={ Routes.category(model.category.slug) }>
								{ model.category.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="manufacturer">
							{ model.manufacturer && <Link href={ Routes.manufacturer(model.manufacturer.slug) }>
								{ model.manufacturer.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="count">
							{ model?.count && model.count }
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editModel(model.slug) } label={ model.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ModelsTable
