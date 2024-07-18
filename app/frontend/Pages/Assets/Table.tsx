import React from 'react'
import { Routes } from '@/lib'
import { Group, Link, Money, Table } from '@/Components'
import { EditButton, CheckoutButton, CheckinButton } from '@/Components/Button'
import { type TableProps } from '@/Components/Table/Table'

const AssetTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="models.name">Model</Table.HeadCell>
					<Table.HeadCell sort="asset_tag">Asset Tag</Table.HeadCell>
					<Table.HeadCell sort="serial">Serial</Table.HeadCell>
					<Table.HeadCell sort="categories.name">Category</Table.HeadCell>
					<Table.HeadCell sort="manufacturers.name">Manufacturer</Table.HeadCell>
					<Table.HeadCell sort="vendors.name">Vendor</Table.HeadCell>
					<Table.HeadCell sort="cost_cents">Cost</Table.HeadCell>
					<Table.HeadCell sort="departments.name">Department</Table.HeadCell>
					<Table.HeadCell sort="type">Asset Type</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (asset: Schema.AssetsIndex) => {
					return (
						<Table.Row key={ asset.id }>

							<Table.Cell>
								<Link href={ Routes.asset(asset) }>{ asset.name }</Link>
							</Table.Cell>

							<Table.Cell >
								<Link href={ Routes.asset(asset) }>{ asset.model?.name }</Link>
							</Table.Cell>

							<Table.Cell>{ asset.asset_tag }</Table.Cell>

							<Table.Cell>{ asset.serial }</Table.Cell>

							<Table.Cell>
								<Link href={ Routes.asset(asset) }>{ asset.category?.name }</Link>
							</Table.Cell>

							<Table.Cell>
								<Link href={ Routes.asset(asset) }>{ asset.manufacturer?.name }</Link>
							</Table.Cell>

							<Table.Cell>
								<Link href={ Routes.asset(asset) }>{ asset.vendor?.name }</Link>
							</Table.Cell>

							<Table.Cell>
								<Money currency={ asset.cost_currency }>{ asset.cost }</Money>
							</Table.Cell>

							<Table.Cell >
								<Link href={ Routes.asset(asset) }>{ asset.department?.name }</Link>
							</Table.Cell>

							<Table.Cell >
								<Link href={ Routes.asset(asset) }>{ asset.type }</Link>
							</Table.Cell>

							<Table.Cell fitContent>
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
