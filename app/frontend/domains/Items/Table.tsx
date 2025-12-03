import { type DataTableColumn } from "mantine-datatable"
import { useState } from "react"

import { Link, Money, Group, Table } from "@/components"
import { EditButton, CheckoutButton, CheckinButton } from "@/components/Button"
import { Routes } from "@/lib"

const itemsColumns: DataTableColumn<Schema.ItemsIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (item) => <Link href={ Routes.item(item) }>{ item.name }</Link>,
	},
	{
		accessor: "model.name",
		title: "Model",
		sortable: true,
		render: (item) => item.model ? <Link href={ Routes.model(item.model.slug) }>{ item.model.name }</Link> : null,
	},
	{
		accessor: "asset_tag",
		title: "Asset Tag",
		sortable: true,
		render: (item) => <Link href={ Routes.item(item) }>{ item.asset_tag }</Link>,
	},
	{
		accessor: "serial",
		title: "Serial",
		sortable: true,
		render: (item) => <Link href={ Routes.item(item) }>{ item.serial }</Link>,
	},
	{
		accessor: "category.name",
		title: "Category",
		sortable: true,
		render: (item) => item.category ? <Link href={ Routes.category(item.category.slug) }>{ item.category.name }</Link> : null,
	},
	{
		accessor: "manufacturer.name",
		title: "Manufacturer",
		sortable: true,
		render: (item) => item.manufacturer ? <Link href={ Routes.item(item) }>{ item.manufacturer.name }</Link> : null,
	},
	{
		accessor: "vendor.name",
		title: "Vendor",
		sortable: true,
		render: (item) => item.vendor ? <Link href={ Routes.vendor(item.vendor.slug) }>{ item.vendor.name }</Link> : null,
	},
	{
		accessor: "cost",
		title: "Cost",
		sortable: true,
		render: (item) => <Money accounting>{ item.cost }</Money>,
	},
	{
		accessor: "department.name",
		title: "Department",
		sortable: true,
		render: (item) => item.department ? <Link href={ Routes.department(item.department) }>{ item.department.name }</Link> : null,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (item) => (
			<Group wrap="nowrap" gap="sm" justify="flex-end">
				{ item.assigned ?
					<CheckinButton href={ Routes.checkinItem(item) } label={ item.name } />
					:
					<CheckoutButton href={ Routes.checkoutItem(item) } label={ item.name } />
				}
				<EditButton href={ Routes.editItem(item) } label={ item.name } />
			</Group>
		),
	},
]


interface ItemsTableProps {
	records: Schema.ItemsIndex[]
	pagination: Schema.Pagination
	model: string
	onSelectedRecordsChange?: (records: Schema.ItemsIndex[]) => void
}

const ItemsTable = ({ records, pagination, model, onSelectedRecordsChange }: ItemsTableProps) => {
	const [selectedRecords, setSelectedRecords] = useState<Schema.ItemsIndex[]>([])

	const handleSelectedRecordsChange = (newSelected: Schema.ItemsIndex[]) => {
		setSelectedRecords(newSelected)
		onSelectedRecordsChange?.(newSelected)
	}

	return (
		<Table.DataTable
			columns={ itemsColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
			selectable={ true }
			onSelectedRecordsChange={ handleSelectedRecordsChange }
		/>
	)
}

export default ItemsTable
