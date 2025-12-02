import { createColumnHelper } from "@tanstack/react-table"

import { Group, Link, Money, Table } from "@/components"
import { EditButton, CheckoutButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

import { ReplenishButton } from "./ReplenishButton"

const columnHelper = createColumnHelper<Schema.ConsumablesIndex>()

export const consumablesColumns = [
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
	columnHelper.accessor("qty", {
		header: "Qty",
		enableSorting: true,
		meta: {
			model: "qty",
			hideable: "qty",
		},
	}),
	columnHelper.accessor("min_qty", {
		header: "Min Qty",
		enableSorting: true,
		meta: {
			model: "min_qty",
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

const ConsumablesTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="model" />
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
				<Table.RowIterator render={ (consumable: Schema.ConsumablesIndex) => (
					<Table.Row key={ consumable.id }>

						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.consumable(consumable) }>{ consumable.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="model">
							<Link href={ Routes.consumable(consumable) }>{ consumable.model?.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="category">
							<Link href={ Routes.consumable(consumable) }>{ consumable.category?.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="manufacturer">
							<Link href={ Routes.consumable(consumable) }>{ consumable.manufacturer?.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="vendor">
							<Link href={ Routes.consumable(consumable) }>{ consumable.vendor?.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="cost">
							<Money currency={ consumable.cost_currency }>{ consumable.cost }</Money>
						</Table.Cell>

						<Table.Cell columnId="qty">{ consumable.qty }</Table.Cell>

						<Table.Cell columnId="min_qty">{ consumable.min_qty }</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<Group wrap="nowrap" gap="sm">
								<CheckoutButton
									href={ Routes.checkoutConsumable(consumable) }
									disabled={ consumable.qty_available < 1 }
									tooltipMessage={ consumable.qty_available < 1 && "There are none to checkout" }
									label={ consumable.name }
								/>
								<ReplenishButton consumable={ consumable } />
								<EditButton
									href={ Routes.editConsumable(consumable) }
									label={ consumable.name }
								/>
							</Group>
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ConsumablesTable
