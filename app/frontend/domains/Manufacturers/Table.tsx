import { type DataTableColumn } from "mantine-datatable"

import { Link } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

export const manufacturersColumns: DataTableColumn<Schema.ManufacturersIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (manufacturer) => <Link href={ Routes.manufacturer(manufacturer.slug) }>{ manufacturer.name }</Link>,
	},
	{
		accessor: "models",
		title: "Models",
		sortable: true,
		render: (manufacturer) => <Link href={ Routes.models() }>{ manufacturer.counts.models }</Link>,
	},
	{
		accessor: "items",
		title: "Items",
		sortable: true,
		render: (manufacturer) => <Link href={ Routes.items() }>{ manufacturer.counts.items }</Link>,
	},
	{
		accessor: "accessories",
		title: "Accessories",
		sortable: true,
		render: (manufacturer) => <Link href={ Routes.accessories() }>{ manufacturer.counts.accessories }</Link>,
	},
	{
		accessor: "consumables",
		title: "Consumables",
		sortable: true,
		render: (manufacturer) => <Link href={ Routes.consumables() }>{ manufacturer.counts.consumables }</Link>,
	},
	{
		accessor: "components",
		title: "Components",
		sortable: true,
		render: (manufacturer) => <Link href={ Routes.components() }>{ manufacturer.counts.components }</Link>,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (manufacturer) => <EditButton href={ Routes.editManufacturer(manufacturer.slug) } label={ manufacturer.name } />,
	},
]

import { Table } from "@/components"

interface ManufacturersTableProps {
	records: Schema.ManufacturersIndex[]
	pagination: Schema.Pagination
	model: string
}

const ManufacturersTable = ({ records, pagination, model }: ManufacturersTableProps) => {
	return (
		<Table.DataTable
			columns={ manufacturersColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default ManufacturersTable
