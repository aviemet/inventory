import { type DataTableColumn } from "mantine-datatable"

import { Link } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

export const companiesColumns: DataTableColumn<Schema.CompaniesIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (company) => <Link href={ Routes.company(company.slug) }>{ company.name }</Link>,
	},
	{
		accessor: "locations",
		title: "Locations",
		sortable: true,
		render: (company) => <Link href={ Routes.locations() }>{ company.counts.locations }</Link>,
	},
	{
		accessor: "departments",
		title: "Departments",
		sortable: true,
		render: (company) => <Link href={ Routes.departments() }>{ company.counts.departments }</Link>,
	},
	{
		accessor: "items",
		title: "Assets",
		sortable: true,
		render: (company) => <Link href={ Routes.items() }>{ company.counts.items }</Link>,
	},
	{
		accessor: "accessories",
		title: "Accessories",
		sortable: true,
		render: (company) => <Link href={ Routes.accessories() }>{ company.counts.accessories }</Link>,
	},
	{
		accessor: "consumables",
		title: "Consumables",
		sortable: true,
		render: (company) => <Link href={ Routes.consumables() }>{ company.counts.consumables }</Link>,
	},
	{
		accessor: "components",
		title: "Components",
		sortable: true,
		render: (company) => <Link href={ Routes.components() }>{ company.counts.components }</Link>,
	},
	{
		accessor: "licenses",
		title: "Licenses",
		sortable: true,
		render: (company) => <Link href={ Routes.licenses() }>{ company.counts.licenses }</Link>,
	},
	{
		accessor: "contracts",
		title: "Contracts",
		sortable: true,
		render: (company) => <Link href={ Routes.contracts() }>{ company.counts.contracts }</Link>,
	},
	{
		accessor: "vendors",
		title: "Vendors",
		sortable: true,
		render: (company) => <Link href={ Routes.vendors() }>{ company.counts.vendors }</Link>,
	},
	{
		accessor: "people",
		title: "People",
		sortable: true,
		render: (company) => <Link href={ Routes.people() }>{ company.counts.people }</Link>,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (company) => <EditButton href={ Routes.editCompany(company.slug) } label={ company.name } />,
	},
]

import { Table } from "@/components"

interface CompaniesTableProps {
	records: Schema.CompaniesIndex[]
	pagination: Schema.Pagination
	model: string
}

const CompaniesTable = ({ records, pagination, model }: CompaniesTableProps) => {
	return (
		<Table.DataTable
			columns={ companiesColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default CompaniesTable
