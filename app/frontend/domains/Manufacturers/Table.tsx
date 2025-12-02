import { createColumnHelper } from "@tanstack/react-table"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.ManufacturersIndex>()

export const manufacturersColumns = [
	columnHelper.accessor("name", {
		header: "Name",
		enableSorting: true,
		meta: {
			model: "name",
			hideable: false,
		},
	}),
	columnHelper.display({
		id: "models",
		header: "Models",
		enableSorting: true,
		meta: {
			model: "models.count",
			hideable: "models",
		},
	}),
	columnHelper.display({
		id: "items",
		header: "Items",
		enableSorting: true,
		meta: {
			model: "items.count",
			hideable: "items",
		},
	}),
	columnHelper.display({
		id: "accessories",
		header: "Accessories",
		enableSorting: true,
		meta: {
			model: "accessories.count",
			hideable: "accessories",
		},
	}),
	columnHelper.display({
		id: "consumables",
		header: "Consumables",
		enableSorting: true,
		meta: {
			model: "consumables.count",
			hideable: "consumables",
		},
	}),
	columnHelper.display({
		id: "components",
		header: "Components",
		enableSorting: true,
		meta: {
			model: "components.count",
			hideable: "components",
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

const ManufacturersTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="models" />
					<Table.HeadCell columnId="items" />
					<Table.HeadCell columnId="accessories" />
					<Table.HeadCell columnId="consumables" />
					<Table.HeadCell columnId="components" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (manufacturer: Schema.ManufacturersIndex) => (
					<Table.Row key={ manufacturer.id }>
						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.manufacturer(manufacturer.slug) }>{ manufacturer.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="models">
							<Link href={ Routes.models() }>
								{ manufacturer.counts.models }
							</Link>
						</Table.Cell>

						<Table.Cell columnId="items">
							<Link href={ Routes.items() }>
								{ manufacturer.counts.items }
							</Link>
						</Table.Cell>

						<Table.Cell columnId="accessories">
							<Link href={ Routes.accessories() }>
								{ manufacturer.counts.accessories }
							</Link>
						</Table.Cell>

						<Table.Cell columnId="consumables">
							<Link href={ Routes.consumables() }>
								{ manufacturer.counts.consumables }
							</Link>
						</Table.Cell>

						<Table.Cell columnId="components">
							<Link href={ Routes.components() }>
								{ manufacturer.counts.components }
							</Link>
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editManufacturer(manufacturer.slug) } label={ manufacturer.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ManufacturersTable
