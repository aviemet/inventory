import { type DataTableColumn } from "mantine-datatable"

import { Link } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

export const vendorsColumns: DataTableColumn<Schema.VendorsIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (vendor) => <Link href={ Routes.vendor(vendor.slug) }>{ vendor.name }</Link>,
	},
	{
		accessor: "url",
		title: "Website",
		sortable: true,
		render: (vendor) => vendor.url ? <Link href={ vendor.url }>{ vendor.url }</Link> : null,
	},
	{
		accessor: "contracts",
		title: "Contracts",
		sortable: false,
		render: (vendor) => vendor.contracts ? <Link href={ Routes.contracts() }>{ vendor.contracts.length }</Link> : null,
	},
	{
		accessor: "items",
		title: "Items",
		sortable: false,
		render: (vendor) => vendor.items ? <Link href={ Routes.items() }>{ vendor.items.length }</Link> : null,
	},
	{
		accessor: "accessories",
		title: "Accessories",
		sortable: false,
		render: (vendor) => vendor.accessories ? <Link href={ Routes.accessories() }>{ vendor.accessories.length }</Link> : null,
	},
	{
		accessor: "consumables",
		title: "Consumables",
		sortable: false,
		render: (vendor) => vendor.consumables ? <Link href={ Routes.consumables() }>{ vendor.consumables.length }</Link> : null,
	},
	{
		accessor: "components",
		title: "Components",
		sortable: false,
		render: (vendor) => vendor.components ? <Link href={ Routes.components() }>{ vendor.components.length }</Link> : null,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (vendor) => <EditButton href={ Routes.editVendor(vendor.slug) } label={ vendor.name } />,
	},
]

import { Table } from "@/components"

interface VendorsTableProps {
	records: Schema.VendorsIndex[]
	pagination: Schema.Pagination
	model: string
}

const VendorsTable = ({ records, pagination, model }: VendorsTableProps) => {
	return (
		<Table.DataTable
			columns={ vendorsColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default VendorsTable
