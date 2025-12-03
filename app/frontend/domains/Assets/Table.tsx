import { type DataTableColumn } from "mantine-datatable"

import { Group, Link, Money, Table } from "@/components"
import { EditButton, CheckoutButton, CheckinButton } from "@/components/Button"
import { Routes } from "@/lib"

export const assetsColumns: DataTableColumn<Schema.AssetsIndex>[] = [
	{
		accessor: "name",
		title: "Name",
		sortable: true,
		render: (asset) => <Link href={ Routes.asset(asset) }>{ asset.name }</Link>,
	},
	{
		accessor: "model.name",
		title: "Model",
		sortable: true,
		render: (asset) => asset.model ? <Link href={ Routes.asset(asset) }>{ asset.model.name }</Link> : null,
	},
	{
		accessor: "asset_tag",
		title: "Asset Tag",
		sortable: true,
	},
	{
		accessor: "serial",
		title: "Serial",
		sortable: true,
	},
	{
		accessor: "category.name",
		title: "Category",
		sortable: true,
		render: (asset) => asset.category ? <Link href={ Routes.asset(asset) }>{ asset.category.name }</Link> : null,
	},
	{
		accessor: "manufacturer.name",
		title: "Manufacturer",
		sortable: true,
		render: (asset) => asset.manufacturer ? <Link href={ Routes.asset(asset) }>{ asset.manufacturer.name }</Link> : null,
	},
	{
		accessor: "vendor.name",
		title: "Vendor",
		sortable: true,
		render: (asset) => asset.vendor ? <Link href={ Routes.asset(asset) }>{ asset.vendor.name }</Link> : null,
	},
	{
		accessor: "cost",
		title: "Cost",
		sortable: true,
		render: (asset) => <Money currency={ asset.cost_currency }>{ asset.cost }</Money>,
	},
	{
		accessor: "department.name",
		title: "Department",
		sortable: true,
		render: (asset) => asset.department ? <Link href={ Routes.asset(asset) }>{ asset.department.name }</Link> : null,
	},
	{
		accessor: "type",
		title: "Asset Type",
		sortable: true,
		render: (asset) => <Link href={ Routes.asset(asset) }>{ asset.type }</Link>,
	},
	{
		accessor: "actions",
		title: "Actions",
		sortable: false,
		textAlign: "right",
		render: (asset) => (
			<Group wrap="nowrap" gap="sm" justify="flex-end">
				{ asset.available_to_checkout ?
					<CheckoutButton href={ Routes.checkoutAsset(asset) } label={ asset.name } />
					:
					<CheckinButton href={ Routes.checkinAsset(asset) } label={ asset.name } />
				}
				<EditButton href={ Routes.editAsset(asset) } label={ asset.name } />
			</Group>
		),
	},
]

interface AssetTableProps {
	records: Schema.AssetsIndex[]
	pagination: Schema.Pagination
	model: string
}

const AssetTable = ({ records, pagination, model }: AssetTableProps) => {
	return (
		<Table.DataTable
			columns={ assetsColumns }
			records={ records }
			pagination={ pagination }
			model={ model }
		/>
	)
}

export default AssetTable
