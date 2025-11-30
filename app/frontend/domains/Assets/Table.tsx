import { Group, Link, Money, Table } from "@/components"
import { EditButton, CheckoutButton, CheckinButton } from "@/components/Button"
import { type TableProps } from "@/components/Table/Table"
import { Routes } from "@/lib"

const AssetTable = (props: Omit<TableProps, "children">) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell columnId="name" sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell columnId="model" sort="models.name">Model</Table.HeadCell>
					<Table.HeadCell columnId="asset_tag" sort="asset_tag">Asset Tag</Table.HeadCell>
					<Table.HeadCell columnId="serial" sort="serial">Serial</Table.HeadCell>
					<Table.HeadCell columnId="category" sort="categories.name">Category</Table.HeadCell>
					<Table.HeadCell columnId="manufacturer" sort="manufacturers.name">Manufacturer</Table.HeadCell>
					<Table.HeadCell columnId="vendor" sort="vendors.name">Vendor</Table.HeadCell>
					<Table.HeadCell columnId="cost" sort="cost_cents">Cost</Table.HeadCell>
					<Table.HeadCell columnId="department" sort="departments.name">Department</Table.HeadCell>
					<Table.HeadCell columnId="type" sort="type">Asset Type</Table.HeadCell>
					<Table.HeadCell columnId="actions" style={ { textAlign: "right", paddingRight: "1rem" } }>Actions</Table.HeadCell>
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
