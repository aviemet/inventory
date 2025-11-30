import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const VendorsTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell columnId="url" sort="url">Website</Table.HeadCell>
					<Table.HeadCell columnId="contracts">Contracts</Table.HeadCell>
					<Table.HeadCell columnId="items">Items</Table.HeadCell>
					<Table.HeadCell columnId="accessories">Accessories</Table.HeadCell>
					<Table.HeadCell columnId="consumables">Consumables</Table.HeadCell>
					<Table.HeadCell columnId="components">Components</Table.HeadCell>
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (vendor: Schema.VendorsIndex) => (
					<Table.Row key={ vendor.id }>

						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.vendor(vendor.slug) }>{ vendor.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="url" nowrap>
							{ vendor.url && <Link href={ vendor.url }>
								{ vendor.url }
							</Link> }
						</Table.Cell>

						<Table.Cell columnId="contracts" nowrap>
							{ vendor.contracts && <Link href={ Routes.contracts() }>{ vendor.contracts.length }</Link> }
						</Table.Cell>

						<Table.Cell columnId="items" nowrap>
							{ vendor.items && <Link href={ Routes.items() }>{ vendor.items.length }</Link> }
						</Table.Cell>

						<Table.Cell columnId="accessories" nowrap>
							{ vendor.accessories && <Link href={ Routes.accessories() }>{ vendor.accessories.length }</Link> }
						</Table.Cell>

						<Table.Cell columnId="consumables" nowrap>
							{ vendor.consumables && <Link href={ Routes.consumables() }>{ vendor.consumables.length }</Link> }
						</Table.Cell>

						<Table.Cell columnId="components" nowrap>
							{ vendor.components && <Link href={ Routes.components() }>{ vendor.components.length }</Link> }
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editVendor(vendor.slug) } label={ vendor.name } />
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default VendorsTable
