import { type DataTableColumn } from "mantine-datatable"

import { Link } from "@/components"
import { EditButton } from "@/components/Button"
import { Routes } from "@/lib"

export const locationsColumns: DataTableColumn<Schema.LocationsIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (location) => <Link href={ Routes.location(location.slug) }>{ location.name }</Link>,
	},
	{
		accessor: "parent.name",
		title: "Parent",
		sortable: true,
		render: (location) => location.parent ? <Link href={ Routes.location(location.parent.slug!) }>{ location.parent.name }</Link> : null,
	},
	{
		accessor: "items",
		title: "Assets",
		sortable: true,
		render: (location) => <Link href={ Routes.items() }>{ location.counts.items }</Link>,
	},
	{
		accessor: "accessories",
		title: "Accessories",
		sortable: true,
		render: (location) => <Link href={ Routes.accessories() }>{ location.counts.accessories }</Link>,
	},
	{
		accessor: "consumables",
		title: "Consumables",
		sortable: true,
		render: (location) => <Link href={ Routes.consumables() }>{ location.counts.consumables }</Link>,
	},
	{
		accessor: "components",
		title: "Components",
		sortable: true,
		render: (location) => <Link href={ Routes.components() }>{ location.counts.components }</Link>,
	},
	{
		accessor: "licenses",
		title: "Licenses",
		sortable: true,
		render: (location) => <Link href={ Routes.licenses() }>{ location.counts.licenses }</Link>,
	},
	{
		accessor: "people",
		title: "People",
		sortable: true,
		render: (location) => <Link href={ Routes.people() }>{ location.counts.people }</Link>,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (location) => <EditButton href={ Routes.editLocation(location.slug) } label={ location.name } />,
	},
]

import { Table } from "@/components"

interface LocationsTableProps {
	records: Schema.LocationsIndex[]
	pagination: Schema.Pagination
	model: string
}

const LocationsTable = ({ records, pagination, model }: LocationsTableProps) => {
	return (
		<Table.DataTable
			columns={ locationsColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default LocationsTable
