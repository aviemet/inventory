import React, { useMemo, useState } from 'react'
import { Flex, Heading, Page, Section, Table, Box } from '@/Components'
import { Routes, formatter } from '@/lib'
import { DateTimeInput, Form, TextInput, Select, Submit, Textarea } from '@/Components/Form'
import { LocationsDropdown } from '@/Features/Dropdowns'

interface CheckinLicensesProps {
	assignment: Schema.AssignmentsEdit
	license: Schema.LicensesEdit
	locations: Schema.LocationsOptions[]
	status_labels: Schema.StatusLabelsOptions[]
}

const Checkin = ({ assignment, license, locations, status_labels }: CheckinLicensesProps) => {
	const [licenseName, setLicenseName] = useState(license.name)
	const title = 'Check In License'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'License', href: Routes.licenses() },
			{ title: license.name!, href: Routes.license(license) },
			{ title: 'Check Out', href: window.location.href },
		] }>
			<Section>
				<Title order={ 3 }>{ title }</Title>

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
				<Title order={ 3 }>{ title }</Title>

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

					<LocationsDropdown />

					<Select
						options={ useMemo(() => status_labels.map(label => ({
							label: label.name,
							value: String(label.id),
						})), [status_labels]) }
						label="Status"
						name="status_id"
						required
					/>

					<DateTimeInput
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
