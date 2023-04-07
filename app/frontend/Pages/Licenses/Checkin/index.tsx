import React, { useState } from 'react'
import { Flex, Heading, Page, Section, Table, Box } from '@/Components'
import { Routes, formatter } from '@/lib'
import { DateTime, Form, TextInput, SearchableDropdown, Submit, Textarea } from '@/Components/Form'
import { LocationsDropdown } from '@/Components/Form/Dropdowns'

interface ICheckinLicensesProps {
	assignment: Schema.Assignment
	license: Schema.License
	locations: Schema.Location[]
	statuses: Schema.StatusType[]
}

const Checkin = ({ assignment, license, locations, statuses }: ICheckinLicensesProps) => {
	const [licenseName, setLicenseName] = useState(license.name)
	const title = 'Check In License'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'License', href: Routes.licenses() },
			{ title: license.name!, href: Routes.license(license) },
			{ title: 'Check Out' },
		] }>
			<Section>
				<Heading order={ 3 }>{ title }</Heading>

				<Box sx={ (theme) => ({ maxWidth: `${theme.breakpoints.md}` }) }>
					<Flex>
						<Table wrapper={ false } sx={ { flex: 1 } }>
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

						<Table wrapper={ false } sx={ { flex: 1 } }>
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
				<Heading order={ 3 }>{ title }</Heading>

				<Form
					data={ {
						assignment: {
							...assignment,
						},
						license,
					} }
					to={ Routes.unassignAssignment(assignment) }
					method="patch"
					model="assignment"
				>
					<TextInput
						model="license"
						name="name"
						label="License Name"
						onChange={ name => setLicenseName(String(name)) }
						required
					/>

					<LocationsDropdown locations={ locations } />

					<SearchableDropdown
						options={ statuses }
						label="Status"
						name="status_id"
						required
					/>

					<DateTime
						label="Returned At"
						name="returned_at"
						required
					/>

					<Textarea
						label="Notes"
						name="notes"
					/>

					<Submit>Check In { licenseName }</Submit>

				</Form>
			</Section>
		</Page>
	)
}

export default Checkin
