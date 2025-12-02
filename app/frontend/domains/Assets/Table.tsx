import { createColumnHelper } from "@tanstack/react-table"

import { Group, Link, Money, Table } from "@/components"
import { EditButton, CheckoutButton, CheckinButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const columnHelper = createColumnHelper<Schema.AssetsIndex>()

export const assetsColumns = [
	columnHelper.accessor("name", {
		header: "Name",
		enableSorting: true,
		meta: {
			model: "name",
			hideable: false,
		},
	}),
	columnHelper.accessor(row => row.model?.name, {
		id: "model",
		header: "Model",
		enableSorting: true,
		meta: {
			model: "models.name",
			hideable: "model",
		},
	}),
	columnHelper.accessor("asset_tag", {
		header: "Asset Tag",
		enableSorting: true,
		meta: {
			model: "asset_tag",
			hideable: "asset_tag",
		},
	}),
	columnHelper.accessor("serial", {
		header: "Serial",
		enableSorting: true,
		meta: {
			model: "serial",
			hideable: "serial",
		},
	}),
	columnHelper.accessor(row => row.category?.name, {
		id: "category",
		header: "Category",
		enableSorting: true,
		meta: {
			model: "categories.name",
			hideable: "category",
		},
	}),
	columnHelper.accessor(row => row.manufacturer?.name, {
		id: "manufacturer",
		header: "Manufacturer",
		enableSorting: true,
		meta: {
			model: "manufacturers.name",
			hideable: "manufacturer",
		},
	}),
	columnHelper.accessor(row => row.vendor?.name, {
		id: "vendor",
		header: "Vendor",
		enableSorting: true,
		meta: {
			model: "vendors.name",
			hideable: "vendor",
		},
	}),
	columnHelper.accessor("cost", {
		header: "Cost",
		enableSorting: true,
		meta: {
			model: "cost_cents",
			hideable: "cost",
		},
	}),
	columnHelper.accessor(row => row.department?.name, {
		id: "department",
		header: "Department",
		enableSorting: true,
		meta: {
			model: "departments.name",
			hideable: "department",
		},
	}),
	columnHelper.accessor("type", {
		header: "Asset Type",
		enableSorting: true,
		meta: {
			model: "type",
			hideable: "type",
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

const AssetTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" />
					<Table.HeadCell columnId="model" />
					<Table.HeadCell columnId="asset_tag" />
					<Table.HeadCell columnId="serial" />
					<Table.HeadCell columnId="category" />
					<Table.HeadCell columnId="manufacturer" />
					<Table.HeadCell columnId="vendor" />
					<Table.HeadCell columnId="cost" />
					<Table.HeadCell columnId="department" />
					<Table.HeadCell columnId="type" />
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } } />
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (asset: Schema.AssetsIndex) => {
					return (
						<Table.Row key={ asset.id }>

							<Table.Cell columnId="name">
								<Link href={ Routes.asset(asset) }>{ asset.name }</Link>
							</Table.Cell>

							<Table.Cell columnId="model">
								<Link href={ Routes.asset(asset) }>{ asset.model?.name }</Link>
							</Table.Cell>

							<Table.Cell columnId="asset_tag">{ asset.asset_tag }</Table.Cell>

							<Table.Cell columnId="serial">{ asset.serial }</Table.Cell>

							<Table.Cell columnId="category">
								<Link href={ Routes.asset(asset) }>{ asset.category?.name }</Link>
							</Table.Cell>

							<Table.Cell columnId="manufacturer">
								<Link href={ Routes.asset(asset) }>{ asset.manufacturer?.name }</Link>
							</Table.Cell>

							<Table.Cell columnId="vendor">
								<Link href={ Routes.asset(asset) }>{ asset.vendor?.name }</Link>
							</Table.Cell>

							<Table.Cell columnId="cost">
								<Money currency={ asset.cost_currency }>{ asset.cost }</Money>
							</Table.Cell>

							<Table.Cell columnId="department">
								<Link href={ Routes.asset(asset) }>{ asset.department?.name }</Link>
							</Table.Cell>

							<Table.Cell columnId="type">
								<Link href={ Routes.asset(asset) }>{ asset.type }</Link>
							</Table.Cell>

							<Table.Cell columnId="actions" fitContent>
								<Group wrap="nowrap" gap="sm">
									{ asset.available_to_checkout ?
										<CheckoutButton href={ Routes.checkoutAsset(asset) } label={ asset.name } />
										:
										<CheckinButton href={ Routes.checkinAsset(asset) } label={ asset.name } />
									}
									<EditButton href={ Routes.editAsset(asset) } label={ asset.name } />
								</Group>
							</Table.Cell>
						</Table.Row>
					)
				} } />
			</Table.Body>
		</Table>
	)
}

export default AssetTable
