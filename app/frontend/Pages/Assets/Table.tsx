import React from 'react'
import { Routes } from '@/lib'
import { Link, Money, Table } from '@/Components'
import { EditButton, CheckoutButton, CheckinButton } from '@/Components/Button'
import { type ITableProps } from '@/Components/Table/Table'

const AssetTable = (props: ITableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name" hideable={ false }>Name</Table.Cell>
					<Table.Cell sort="models.name">Model</Table.Cell>
					<Table.Cell sort="asset_tag">Asset Tag</Table.Cell>
					<Table.Cell sort="serial">Serial</Table.Cell>
					<Table.Cell sort="categories.name">Category</Table.Cell>
					<Table.Cell sort="manufacturers.name">Manufacturer</Table.Cell>
					<Table.Cell sort="vendors.name">Vendor</Table.Cell>
					<Table.Cell sort="cost_cents">Cost</Table.Cell>
					<Table.Cell sort="departments.name">Department</Table.Cell>
					<Table.Cell sort="type">Asset Type</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (asset: Schema.Asset) => {
					return (
						<Table.Row key={ asset.id }>

							<Table.Cell nowrap>
								<Link href={ Routes.asset(asset) }>{ asset.name }</Link>
							</Table.Cell>

							<Table.Cell nowrap >
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
								{ asset.available_to_checkout ?
									<CheckoutButton href={ Routes.checkoutAsset(asset) } />
									:
									<CheckinButton href={ Routes.checkinAsset(asset) } />
								}
								<EditButton href={ Routes.editAsset(asset) } />
							</Table.Cell>

						</Table.Row>
					)
				} } />
			</Table.Body>
		</Table>
	)
}

export default AssetTable
