import { Link, Table, Money, Group } from "@/components"
import { EditButton, CheckoutButton, CheckinButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const ItemsTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell columnId="model" sort="models.name">Model</Table.HeadCell>
					<Table.HeadCell columnId="asset_tag" sort="asset_tag">Asset Tag</Table.HeadCell>
					<Table.HeadCell columnId="serial" sort="serial">Serial</Table.HeadCell>
					<Table.HeadCell columnId="category" sort="categories.name">Category</Table.HeadCell>
					<Table.HeadCell columnId="manufacturer" sort="manufacturers.name">Manufacturer</Table.HeadCell>
					<Table.HeadCell columnId="vendor" sort="vendors.name">Vendor</Table.HeadCell>
					<Table.HeadCell columnId="cost" sort="cost_cents">Cost</Table.HeadCell>
					<Table.HeadCell columnId="department" sort="departments.name">Department</Table.HeadCell>
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (item: Schema.ItemsIndex) => (
					<Table.Row key={ item.id }>

						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.item(item) }>{ item.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="model" nowrap>
							{ item.model && <Link href={ Routes.model(item.model.slug) }>
								{ item.model.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="asset_tag">
							<Link href={ Routes.item(item) }>{ item.asset_tag }</Link>
						</Table.Cell>

						<Table.Cell columnId="serial">
							<Link href={ Routes.item(item) }>{ item.serial }</Link>
						</Table.Cell>

						<Table.Cell columnId="category">
							{ item.category && <Link href={ Routes.category(item.category.slug) }>
								{ item.category.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="manufacturer">
							<Link href={ Routes.item(item) }>{ item.manufacturer?.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="vendor">
							{ item.vendor && <Link href={ Routes.vendor(item.vendor.slug) }>
								{ item.vendor.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="cost">
							<Money accounting>{ item.cost }</Money>
						</Table.Cell>

						<Table.Cell columnId="department">
							{ item.department && <Link href={ Routes.department(item.department) }>
								{ item.department?.name }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<Group wrap="nowrap" gap="sm">
								{ item.assigned ?
									<CheckinButton href={ Routes.checkinItem(item) } label={ item.name } />
									:
									<CheckoutButton href={ Routes.checkoutItem(item) } label={ item.name } />
								}
								<EditButton href={ Routes.editItem(item) } label={ item.name } />
							</Group>
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default ItemsTable
