import React from 'react'
import { Routes, formatter } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton, CheckoutButton, CheckinButton } from '@/Components/Button'

const Index = () => {
	return (
		<Table>
			<Table.Head>
				<Table.Row>
					<Table.Cell sort="name">Name</Table.Cell>
					<Table.Cell sort="seats">Seats</Table.Cell>
					<Table.Cell sort="licenser_name">Licensed To Name</Table.Cell>
					<Table.Cell sort="licenser_email">Licensed To Email</Table.Cell>
					<Table.Cell sort="reassignable">Reassignable</Table.Cell>
					<Table.Cell sort="cost_cents">Cost</Table.Cell>
					<Table.Cell sort="purchased_at">Purchase Date</Table.Cell>
					<Table.Cell sort="expires_at">Expire Date</Table.Cell>
					<Table.Cell sort="terminates_at">Termination Date</Table.Cell>
					<Table.Cell sort="maintained">Maintained</Table.Cell>
					<Table.Cell sort="category.name">Category</Table.Cell>
					<Table.Cell sort="vendors.name">Vendor</Table.Cell>
					<Table.Cell sort="manufacturers.name">Manufacturer</Table.Cell>
					<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>

			<Table.Body>
				<Table.RowIterator render={ license => (
					<Table.Row key={ license.id }>
						<Table.Cell nowrap>
							<Link href={ Routes.license(license) }>{ license.name }</Link>
						</Table.Cell>
						<Table.Cell>
							<Link href={ Routes.license(license) }>{ license.seats }</Link>
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
							{ license.cost ? formatter.currency(license.cost, license.cost_currency) : '-' }
						</Table.Cell>
						<Table.Cell>{ formatter.date.short(license.purchased_at) }</Table.Cell>
						<Table.Cell>{ formatter.date.short(license.expires_at) }</Table.Cell>
						<Table.Cell>{ formatter.date.short(license.terminates_at) }</Table.Cell>
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
						<Table.Cell className="table-column-fit">
							{ license.assigned ?
								<CheckinButton href={ Routes.checkinLicense(license) } />
								:
								<CheckoutButton href={ Routes.checkoutLicense(license) } />
							}
							<EditButton href={ Routes.editLicense(license) } />
						</Table.Cell>
					</Table.Row>
				) } />
			</Table.Body>
		</Table>
	)
}

export default Index
