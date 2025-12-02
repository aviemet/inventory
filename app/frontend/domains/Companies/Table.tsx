import { createColumnHelper } from "@tanstack/react-table"

import { Link, Table } from "@/components"
import { EditButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.CompaniesIndex>()

export const companiesColumns = [
	columnHelper.accessor("name", {
		header: "Name",
		enableSorting: true,
		meta: {
			model: "name",
			hideable: false,
		},
	}),
	columnHelper.display({
		id: "locations",
		header: "Locations",
		enableSorting: true,
		meta: {
			model: "locations",
			hideable: "locations",
		},
	}),
	columnHelper.display({
		id: "departments",
		header: "Departments",
		enableSorting: true,
		meta: {
			model: "departments",
			hideable: "departments",
		},
	}),
	columnHelper.display({
		id: "items",
		header: "Assets",
		enableSorting: true,
		meta: {
			model: "items",
			hideable: "items",
		},
	}),
	columnHelper.display({
		id: "accessories",
		header: "Accessories",
		enableSorting: true,
		meta: {
			model: "accessories",
			hideable: "accessories",
		},
	}),
	columnHelper.display({
		id: "consumables",
		header: "Consumables",
		enableSorting: true,
		meta: {
			model: "consumables",
			hideable: "consumables",
		},
	}),
	columnHelper.display({
		id: "components",
		header: "Components",
		enableSorting: true,
		meta: {
			model: "components",
			hideable: "components",
		},
	}),
	columnHelper.display({
		id: "licenses",
		header: "Licenses",
		enableSorting: true,
		meta: {
			model: "licenses",
			hideable: "licenses",
		},
	}),
	columnHelper.display({
		id: "contracts",
		header: "Contracts",
		enableSorting: true,
		meta: {
			model: "contracts",
			hideable: "contracts",
		},
	}),
	columnHelper.display({
		id: "vendors",
		header: "Vendors",
		enableSorting: true,
		meta: {
			model: "vendors",
			hideable: "vendors",
		},
	}),
	columnHelper.display({
		id: "people",
		header: "People",
		enableSorting: true,
		meta: {
			model: "people",
			hideable: "people",
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

const CompaniesTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="locations" />
					<Table.HeadCell columnId="departments" />
					<Table.HeadCell columnId="items" />
					<Table.HeadCell columnId="accessories" />
					<Table.HeadCell columnId="consumables" />
					<Table.HeadCell columnId="components" />
					<Table.HeadCell columnId="licenses" />
					<Table.HeadCell columnId="contracts" />
					<Table.HeadCell columnId="vendors" />
					<Table.HeadCell columnId="people" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
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
