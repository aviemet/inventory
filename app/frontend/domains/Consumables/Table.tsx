import { Group, Link, Money, Table } from "@/components"
import { EditButton, CheckoutButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

import { ReplenishButton } from "./ReplenishButton"

const ConsumablesTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell columnId="model" sort="models.name">Model</Table.HeadCell>
					<Table.HeadCell columnId="category" sort="categories.name">Category</Table.HeadCell>
					<Table.HeadCell columnId="manufacturer" sort="manufacturers.name">Manufacturer</Table.HeadCell>
					<Table.HeadCell columnId="vendor" sort="vendors.name">Vendor</Table.HeadCell>
					<Table.HeadCell columnId="cost" sort="cost_cents">Cost</Table.HeadCell>
					<Table.HeadCell columnId="qty" sort="qty">Qty</Table.HeadCell>
					<Table.HeadCell columnId="min_qty" sort="min_qty">Min Qty</Table.HeadCell>
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
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
