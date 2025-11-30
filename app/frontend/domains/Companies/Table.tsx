import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const CompaniesTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell columnId="locations" sort="locations">Locations</Table.HeadCell>
					<Table.HeadCell columnId="departments" sort="departments">Departments</Table.HeadCell>
					<Table.HeadCell columnId="items" sort="items">Assets</Table.HeadCell>
					<Table.HeadCell columnId="accessories" sort="accessories">Accessories</Table.HeadCell>
					<Table.HeadCell columnId="consumables" sort="consumables">Consumables</Table.HeadCell>
					<Table.HeadCell columnId="components" sort="components">Components</Table.HeadCell>
					<Table.HeadCell columnId="licenses" sort="licenses">Licenses</Table.HeadCell>
					<Table.HeadCell columnId="contracts" sort="contracts">Contracts</Table.HeadCell>
					<Table.HeadCell columnId="vendors" sort="vendors">Vendors</Table.HeadCell>
					<Table.HeadCell columnId="people" sort="people">People</Table.HeadCell>
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (company: Schema.CompaniesIndex) => (
					<Table.Row key={ company.id }>
						<Table.Cell columnId="name" nowrap>
							<Link href={ Routes.company(company.slug) }>{ company.name }</Link>
						</Table.Cell>

						<Table.Cell columnId="locations">
							<Link href={ Routes.locations() }>{ company.counts.locations }</Link>
						</Table.Cell>

						<Table.Cell columnId="departments">
							<Link href={ Routes.departments() }>{ company.counts.departments }</Link>
						</Table.Cell>

						<Table.Cell columnId="items">
							<Link href={ Routes.items() }>{ company.counts.items }</Link>
						</Table.Cell>

						<Table.Cell columnId="accessories">
							<Link href={ Routes.accessories() }>{ company.counts.accessories }</Link>
						</Table.Cell>

						<Table.Cell columnId="consumables">
							<Link href={ Routes.consumables() }>{ company.counts.consumables }</Link>
						</Table.Cell>

						<Table.Cell columnId="components">
							<Link href={ Routes.components() }>{ company.counts.components }</Link>
						</Table.Cell>

						<Table.Cell columnId="licenses">
							<Link href={ Routes.licenses() }>{ company.counts.licenses }</Link>
						</Table.Cell>

						<Table.Cell columnId="contracts">
							<Link href={ Routes.contracts() }>{ company.counts.contracts }</Link>
						</Table.Cell>

						<Table.Cell columnId="vendors">
							<Link href={ Routes.vendors() }>{ company.counts.vendors }</Link>
						</Table.Cell>

						<Table.Cell columnId="people">
							<Link href={ Routes.people() }>{ company.counts.people }</Link>
						</Table.Cell>

						<Table.Cell columnId="actions" fitContent>
							<EditButton href={ Routes.editCompany(company.slug) } label={ company.name } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default CompaniesTable
