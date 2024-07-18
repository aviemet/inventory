import React from 'react'
import { Link, Title, Table, Box, Money } from '@/Components'
import { formatter, Routes } from '@/lib'
import { ShowLicenseProps } from '.'

const LicenseDetails = ({ license }: ShowLicenseProps) => {
	return (
		<>
			<Title order={ 2 }>Details</Title>

			<Box style={ theme => ({ maxWidth: `${theme.breakpoints.sm}` }) }>
				<Table>
					<Table.Body>

						<Table.Row>
							<Table.Cell>Name</Table.Cell>
							<Table.Cell>{ license.name }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Key</Table.Cell>
							<Table.Cell>{ license.key }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Manufacturer</Table.Cell>
							<Table.Cell>
								{ license.manufacturer && <Link href={ Routes.manufacturer(license.manufacturer.slug) }>
									{ license.manufacturer!.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Vendor</Table.Cell>
							<Table.Cell>
								{ license.vendor && <Link href={ Routes.vendor(license.vendor.slug) }>
									{ license.vendor.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Category</Table.Cell>
							<Table.Cell>
								{ license.category && <Link href={ Routes.category(license.category.slug) }>
									{ license.category.name }
								</Link> }
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Purchase Cost</Table.Cell>
							<Table.Cell>
								<Money accounting={ false } currency={ license.cost_currency }>{ license.cost }</Money>
							</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Purchase Date</Table.Cell>
							<Table.Cell>{ license.purchased_at && formatter.date.short(license.purchased_at) }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Licenser Name</Table.Cell>
							<Table.Cell>{ license.licenser_name }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell>Licenser Email</Table.Cell>
							<Table.Cell>{ license.licenser_email }</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</Box>
		</>
	)
}

export default LicenseDetails
