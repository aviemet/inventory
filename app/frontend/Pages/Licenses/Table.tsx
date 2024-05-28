import React from 'react'
import { Routes, formatter } from '@/lib'
import { Group, Link, Money, Table } from '@/Components'
import { CheckoutButton, EditButton } from '@/Components/Button'
import { TableProps } from '@/Components/Table/Table'

const LicensesTable = (props: TableProps) => {
	return (
		<Table { ...props }>
			<Table.Head>
				<Table.Row>
					<Table.HeadCell sort="name" hideable={ false }>Name</Table.HeadCell>
					<Table.HeadCell sort="qty">Seats</Table.HeadCell>
					<Table.HeadCell sort="licenser_name">Licensed To Name</Table.HeadCell>
					<Table.HeadCell sort="licenser_email">Licensed To Email</Table.HeadCell>
					<Table.HeadCell sort="reassignable">Reassignable</Table.HeadCell>
					<Table.HeadCell sort="cost_cents">Cost</Table.HeadCell>
					<Table.HeadCell sort="purchased_at">Purchase Date</Table.HeadCell>
					<Table.HeadCell sort="expires_at">Expire Date</Table.HeadCell>
					<Table.HeadCell sort="terminates_at">Termination Date</Table.HeadCell>
					<Table.HeadCell sort="maintained">Maintained</Table.HeadCell>
					<Table.HeadCell sort="category.name">Category</Table.HeadCell>
					<Table.HeadCell sort="vendors.name">Vendor</Table.HeadCell>
					<Table.HeadCell sort="manufacturers.name">Manufacturer</Table.HeadCell>
					<Table.HeadCell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.HeadCell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ (license: Schema.LicensesIndex) => (
					<Table.Row key={ license.id }>

						<Table.Cell nowrap>
							<Link href={ Routes.license(license) }>{ license.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.license(license) }>{ license.qty }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.license(license) }>{ license.licenser_name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.license(license) }>{ license.licenser_email }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.license(license) }>{ license.reassignable }</Link>
						</Table.Cell>

						<Table.Cell>
							<Money>{ license.cost }</Money>
						</Table.Cell>

						<Table.Cell>{ license.purchased_at && formatter.date.short(license.purchased_at) }</Table.Cell>

						<Table.Cell>{ license.expires_at && formatter.date.short(license.expires_at) }</Table.Cell>

						<Table.Cell>{ license.terminates_at && formatter.date.short(license.terminates_at) }</Table.Cell>

						<Table.Cell>{ license.maintained }</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.license(license) }>{ license.category?.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.license(license) }>{ license.vendor?.name }</Link>
						</Table.Cell>

						<Table.Cell>
							<Link href={ Routes.license(license) }>{ license.manufacturer?.name }</Link>
						</Table.Cell>


						<Table.Cell fitContent>
							<Group wrap="nowrap" gap="sm">
								{ license.qty_available && <CheckoutButton
									href={ Routes.checkoutLicense(license) }
									disabled={ license.qty_available < 1 }
									tooltipMessage={ license.qty_available < 1 && 'There are none to checkout' }
									label={ license.name }
								/> }
								<EditButton href={ Routes.editLicense(license) } />
							</Group>
						</Table.Cell>

					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default LicensesTable
