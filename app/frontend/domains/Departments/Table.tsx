import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const DepartmentsTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell columnId="items" sort="items">Assets</Table.HeadCell>
					<Table.HeadCell columnId="accessories" sort="accessories">Accessories</Table.HeadCell>
					<Table.HeadCell columnId="consumables" sort="consumables">Consumables</Table.HeadCell>
					<Table.HeadCell columnId="components" sort="components">Components</Table.HeadCell>
					<Table.HeadCell columnId="licenses" sort="licenses">Licenses</Table.HeadCell>
					<Table.HeadCell columnId="people" sort="people">People</Table.HeadCell>
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (department: Schema.DepartmentsIndex) => (
					<Table.Row key={ department.id }>
						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.department(department.slug) }>{ department.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="items">
							<Link href={ Routes.items() }>{ department!.counts.items }</Link>
						</Table.Cell>

						<Table.Cell columnId="accessories">
							<Link href={ Routes.accessories() }>{ department!.counts.accessories }</Link>
						</Table.Cell>

						<Table.Cell columnId="consumables">
							<Link href={ Routes.consumables() }>{ department!.counts.consumables }</Link>
						</Table.Cell>

						<Table.Cell columnId="components">
							<Link href={ Routes.components() }>{ department!.counts.components }</Link>
						</Table.Cell>

						<Table.Cell columnId="licenses">
							<Link href={ Routes.licenses() }>{ department!.counts.licenses }</Link>
						</Table.Cell>

						<Table.Cell columnId="people">
							<Link href={ Routes.people() }>{ department!.counts.people }</Link>
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editDepartment(department.slug) } label={ department.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default DepartmentsTable
