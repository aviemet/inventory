import { Group, Link, Money, Table } from "@/components"
import { EditButton, CheckoutButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const ComponentsTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell columnId="model" sort="models.name">Model</Table.HeadCell>
					<Table.HeadCell columnId="serial" sort="serial">Serial</Table.HeadCell>
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
