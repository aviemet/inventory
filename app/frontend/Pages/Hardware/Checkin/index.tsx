import React, { useState } from 'react'
import { Heading, Page, Section, Table } from '@/Components'
import { Routes } from '@/lib'
import { DateTime, Form, Input, SearchableDropdown, Submit, Textarea } from '@/Components/Form'
import { LocationsDropdown } from '@/Components/Form/Dropdowns'
import { createStyles } from '@mantine/core'

const useTableStyles = createStyles(theme => ({
	table: {
		maxWidth: `${theme.breakpoints.md}px`
	},
	firstCell: {
		fontWeight: 'bold',
		textAlign: 'right',
		width: '1px',
	}
}))

interface ICheckinHardwareProps {
	assignment: Schema.Assignment
	hardware: Schema.Hardware
	locations: Schema.Location[]
	statuses: Schema.StatusType[]
}

const Checkin = ({ assignment, hardware, locations, statuses }: ICheckinHardwareProps) => {
	const [hardwareName, setItemName] = useState(hardware.name)
	const { classes } = useTableStyles()
	const title = 'Check In Item'

	return (
		<Page title={ title }>
			<Section>
				<Table className={ classes.table }>
					<Table.Body>
						<Table.Row>
							<Table.Cell className={ classes.firstCell }>Model</Table.Cell>
							<Table.Cell>{ hardware.name }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell className={ classes.firstCell }>Asset Tag</Table.Cell>
							<Table.Cell>{ hardware.asset_tag }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell className={ classes.firstCell }>Serial</Table.Cell>
							<Table.Cell>{ hardware.serial }</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</Section>

			<Section>
				<Heading order={ 3 }>{ title }</Heading>

				<Form
					data={ {
						assignment: {
							...assignment,
							location_id: hardware?.default_location_id,
						},
						hardware,
					} }
					to={ Routes.unassignAssignment(assignment) }
					method="patch"
					model="assignment"
				>
					<Input
						model="hardware"
						name="name"
						label="Item Name"
						onChange={ name => setItemName(String(name)) }
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

					<Submit>Check In { hardwareName }</Submit>

				</Form>
			</Section>
		</Page>
	)
}

export default Checkin
