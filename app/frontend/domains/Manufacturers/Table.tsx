import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const ManufacturersTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell columnId="models" sort="models.count">Models</Table.HeadCell>
					<Table.HeadCell columnId="items" sort="items.count">Items</Table.HeadCell>
					<Table.HeadCell columnId="accessories" sort="accessories.count">Accessories</Table.HeadCell>
					<Table.HeadCell columnId="consumables" sort="consumables.count">Consumables</Table.HeadCell>
					<Table.HeadCell columnId="components" sort="components.count">Components</Table.HeadCell>
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
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
