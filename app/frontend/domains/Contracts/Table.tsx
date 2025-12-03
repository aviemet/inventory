import { type DataTableColumn } from "mantine-datatable"

import { Link } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes, formatter } from "@/lib"

export const contractsColumns: DataTableColumn<Schema.ContractsIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (contract) => <Link href={ Routes.contract(contract.slug) }>{ contract.name }</Link>,
	},
	{
		accessor: "number",
		title: "#",
		sortable: true,
		render: (contract) => <Link href={ Routes.contract(contract.slug) }>{ contract.number }</Link>,
	},
	{
		accessor: "begins_at",
		title: "Start Date",
		sortable: true,
		render: (contract) => contract.begins_at ? formatter.date.short(contract.begins_at) : null,
	},
	{
		accessor: "ends_at",
		title: "End Date",
		sortable: true,
		render: (contract) => contract.ends_at ? formatter.date.short(contract.ends_at) : null,
	},
	{
		accessor: "vendor.name",
		title: "Vendor",
		sortable: true,
		render: (contract) => contract?.vendor?.slug ? <Link href={ Routes.vendor(contract.vendor.slug) }>{ contract.vendor.name }</Link> : null,
	},
	{
		accessor: "category.name",
		title: "Category",
		sortable: true,
		render: (contract) => contract.category ? <Link href={ Routes.category(contract.category) }>{ contract.category.name }</Link> : null,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (contract) => <EditButton href={ Routes.editContract(contract.slug) } label={ contract.name } />,
	},
]

import { Table } from "@/components"

interface ContractsTableProps {
	records: Schema.ContractsIndex[]
	pagination: Schema.Pagination
	model: string
}

const ContractsTable = ({ records, pagination, model }: ContractsTableProps) => {
	return (
		<Table.DataTable
			columns={ contractsColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default ContractsTable
