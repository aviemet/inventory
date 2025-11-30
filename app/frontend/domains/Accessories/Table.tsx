import { Group, Link, Money, Table } from "@/components"
import { EditButton, CheckoutButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const AccessoriesTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell columnId="model" sort="models.name">Model</Table.HeadCell>
					<Table.HeadCell columnId="serial" sort="serial">Serial</Table.HeadCell>
					<Table.HeadCell columnId="asset_tag" sort="asset_tag">Asset Tag</Table.HeadCell>
					<Table.HeadCell columnId="category" sort="categories.name">Category</Table.HeadCell>
					<Table.HeadCell columnId="manufacturer" sort="manufacturers.name">Manufacturer</Table.HeadCell>
					<Table.HeadCell columnId="vendor" sort="vendors.name">Vendor</Table.HeadCell>
					<Table.HeadCell columnId="cost" sort="cost_cents">Cost</Table.HeadCell>
					<Table.HeadCell columnId="qty" sort="departments.name">Avail. / Qty</Table.HeadCell>
					<Table.HeadCell columnId="min_qty" sort="departments.name">Min Qty</Table.HeadCell>
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (accessory: Schema.AccessoriesIndex) => {

					return (
						<Table.Row key={ accessory.id }>

							<Table.Cell columnId="name" nowrap>
								<Link href={ Routes.accessory(accessory) }>{ accessory.name }</Link>
							</Table.Cell>

							<Table.Cell columnId="model">
								{ accessory?.model?.slug && <Link href={ Routes.model(accessory.model.slug) }>
									{ accessory.model.name }
								</Link> }
							</Table.Cell>

							<Table.Cell columnId="serial">
								<Link href={ Routes.accessory(accessory) }>{ accessory.serial }</Link>
							</Table.Cell>

							<Table.Cell columnId="asset_tag">
								<Link href={ Routes.accessory(accessory) }>{ accessory.asset_tag }</Link>
							</Table.Cell>

							<Table.Cell columnId="category">
								{ accessory?.category?.slug && <Link href={ Routes.category(accessory.category.slug) }>
									{ accessory.category.name }
								</Link> }
							</Table.Cell>

							<Table.Cell columnId="manufacturer">
								{ accessory?.manufacturer?.slug && <Link href={ Routes.manufacturer(accessory.manufacturer.slug) }>
									{ accessory.manufacturer!.name }
								</Link> }
							</Table.Cell>

							<Table.Cell columnId="vendor">
								{ accessory?.vendor?.slug && <Link href={ Routes.vendor(accessory.vendor.slug) }>
									{ accessory.vendor.name }
								</Link> }
							</Table.Cell>

							<Table.Cell columnId="cost">
								<Money currency={ accessory.cost_currency }>{ accessory.cost }</Money>
							</Table.Cell>

							<Table.Cell columnId="qty" nowrap>{ `${accessory.qty_available} / ${accessory.qty}` }</Table.Cell>

							<Table.Cell columnId="min_qty">{ accessory.min_qty }</Table.Cell>

							<Table.Cell columnId="actions" fitContent>
								<Group wrap="nowrap" gap="sm">
									<CheckoutButton
										href={ Routes.checkoutAccessory(accessory) }
										disabled={ accessory.qty_available < 1 }
										tooltipMessage={ accessory.qty_available < 1 && "None available to checkout" }
										label={ accessory.name }
									/>

									<EditButton href={ Routes.editAccessory(accessory) } label={ accessory.name } />
								</Group>
							</Table.Cell>

						</Table.Row>
					)
				} } />
			</Table.Body>
		</Table>
	)
}

export default AccessoriesTable
