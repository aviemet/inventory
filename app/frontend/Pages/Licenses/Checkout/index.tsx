import React from 'react'
import { Box, Flex, Heading, Page, Section, Table } from '@/Components'
import { DateTime, Form, TextInput, Submit, Textarea } from '@/Components/Form'
import { AssignToableDropdown } from '@/Components/Form/Components'
import { Routes, formatter } from '@/lib'

import { omit } from 'lodash'

interface ICheckoutLicenseProps {
	assignment: Schema.AssignmentsFormData
	license: Schema.LicensesEdit
	items: Schema.ItemsOptions[]
	people: Schema.PeopleOptions[]
}

const Checkout = ({ assignment, license, ...models }: ICheckoutLicenseProps) => {
	const title = 'Checkout License'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'License', href: Routes.licenses() },
			{ title: license.name!, href: Routes.license(license) },
			{ title: 'Check Out' },
		] }>
			<Section>
				<Heading order={ 3 }>{ title }</Heading>

				<Box style={ (theme) => ({ maxWidth: `${theme.breakpoints.md}` }) }>
					<Flex>
						<Table wrapper={ false } style={ { flex: 1 } }>
							<Table.Body>

								<Table.Row>
									<Table.HeadCell>Name</Table.HeadCell>
									<Table.Cell>{ license.name }</Table.Cell>
								</Table.Row>

								<Table.Row>
									<Table.HeadCell>Key</Table.HeadCell>
									<Table.Cell>{ license.key }</Table.Cell>
								</Table.Row>

								<Table.Row>
									<Table.HeadCell>Licenser Name</Table.HeadCell>
									<Table.Cell>{ license.licenser_name }</Table.Cell>
								</Table.Row>

								<Table.Row>
									<Table.HeadCell>Licenser Email</Table.HeadCell>
									<Table.Cell>{ license.licenser_email }</Table.Cell>
								</Table.Row>

							</Table.Body>
						</Table>

						<Table wrapper={ false } style={ { flex: 1 } }>
							<Table.Body>
								<Table.Row>
									<Table.HeadCell>Seats</Table.HeadCell>
									<Table.Cell>{ license.qty }</Table.Cell>
								</Table.Row>

								<Table.Row>
									<Table.HeadCell>Purchase Date</Table.HeadCell>
									<Table.Cell>{ license?.purchased_at && formatter.date.english(license.purchased_at) }</Table.Cell>
								</Table.Row>

								<Table.Row>
									<Table.HeadCell>Vendor</Table.HeadCell>
									<Table.Cell>{ license.vendor?.name }</Table.Cell>
								</Table.Row>

								<Table.Row>
									<Table.HeadCell>Manufacturer</Table.HeadCell>
									<Table.Cell>{ license.manufacturer?.name }</Table.Cell>
								</Table.Row>

							</Table.Body>
						</Table>
					</Flex>
				</Box>
			</Section>

			<Section>
				<Form
					data={ {
						assignment: {
							...omit(assignment, 'status'),
						},
						license: {
							name: license.name,
						},
					} }
					to={ Routes.assignments() }
					model="assignment"
				>
					<TextInput
						model="license"
						name="name"
						label="Item Name"
						required
					/>

					<AssignToableDropdown { ...models } options={ ['Person', 'Item'] } />

					<DateTime
						label="Assigned At"
						name="assigned_at"
						required
					/>

					<DateTime
						label="Expected At"
						name="expected_at"
					/>

					<Textarea
						label="Notes"
						name="notes"
					/>

					<Submit>Checkout { license.name }</Submit>

				</Form>
			</Section>
		</Page>
	)
}

export default Checkout
