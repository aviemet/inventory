import { createColumnHelper } from "@tanstack/react-table"

import { Group, Link, Money, Table } from "@/components"
import { EditButton, CheckoutButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.ComponentsIndex>()

export const componentsColumns = [
	columnHelper.accessor("name", {
		header: "Name",
		enableSorting: true,
		meta: {
			model: "name",
			hideable: false,
		},
	}),
	columnHelper.accessor(row => row.model?.name, {
		id: "model",
		header: "Model",
		enableSorting: true,
		meta: {
			model: "models.name",
			hideable: "model",
		},
	}),
	columnHelper.accessor("serial", {
		header: "Serial",
		enableSorting: true,
		meta: {
			model: "serial",
			hideable: "serial",
		},
	}),
	columnHelper.accessor(row => row.category?.name, {
		id: "category",
		header: "Category",
		enableSorting: true,
		meta: {
			model: "categories.name",
			hideable: "category",
		},
	}),
	columnHelper.accessor(row => row.manufacturer?.name, {
		id: "manufacturer",
		header: "Manufacturer",
		enableSorting: true,
		meta: {
			model: "manufacturers.name",
			hideable: "manufacturer",
		},
	}),
	columnHelper.accessor(row => row.vendor?.name, {
		id: "vendor",
		header: "Vendor",
		enableSorting: true,
		meta: {
			model: "vendors.name",
			hideable: "vendor",
		},
	}),
	columnHelper.accessor("cost", {
		header: "Cost",
		enableSorting: true,
		meta: {
			model: "cost_cents",
			hideable: "cost",
		},
	}),
	columnHelper.display({
		id: "qty",
		header: "Avail. / Qty",
		enableSorting: true,
		meta: {
			model: "departments.name",
			hideable: "qty",
		},
	}),
	columnHelper.display({
		id: "min_qty",
		header: "Min Qty",
		enableSorting: true,
		meta: {
			model: "departments.name",
			hideable: "min_qty",
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

const ComponentsTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="model" />
					<Table.HeadCell columnId="serial" />
					<Table.HeadCell columnId="category" />
					<Table.HeadCell columnId="manufacturer" />
					<Table.HeadCell columnId="vendor" />
					<Table.HeadCell columnId="cost" />
					<Table.HeadCell columnId="qty" />
					<Table.HeadCell columnId="min_qty" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (component: Schema.ComponentsIndex) => (
					<Table.Row key={ component.id }>

						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.component({ id: component.id }) }>{ component.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="model">
							{ component?.model?.slug && <Link href={ Routes.model(component.model.slug) }>
								{ component.model.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="serial">
							<Link href={ Routes.component({ id: component.id }) }>{ component.serial }</Link>
						</Table.Cell>

						<Table.Cell columnId="category">
							{ component?.category?.slug && <Link href={ Routes.category(component.category.slug) }>
								{ component.category.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="manufacturer">
							{ component?.manufacturer?.slug && <Link href={ Routes.manufacturer(component.manufacturer.slug) }>
								{ component.manufacturer!.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="vendor">
							{ component?.vendor?.slug && <Link href={ Routes.vendor(component.vendor.slug) }>
								{ component.vendor.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="cost">
							<Money currency={ component.cost_currency }>{ component.cost }</Money>
						</Table.Cell>

						<Table.Cell columnId="qty" nowrap>{ `${component.qty_available} / ${component.qty}` }</Table.Cell>

						<Table.Cell columnId="min_qty">{ component.min_qty }</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<Group wrap="nowrap" gap="sm">
								<CheckoutButton
									href={ Routes.checkoutComponent({ id: component.id }) }
									disabled={ component.qty_available < 1 }
									tooltipMessage={ component.qty_available < 1 && "There are none to checkout" }
									label={ component.name }
								/>

								<EditButton href={ Routes.editComponent({ id: component.id }) } label={ component.name } />
							</Group>
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ComponentsTable
