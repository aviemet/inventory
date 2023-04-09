import React, { useState } from 'react'
import { Heading, Page, Section, Table } from '@/Components'
import { Routes } from '@/lib'
import { DateTime, Form, TextInput, Submit, Textarea } from '@/Components/Form'
import { LocationsDropdown } from '@/Components/Form/Dropdowns'
import { createStyles } from '@mantine/core'
import StatusLabelsDropdown from '@/Components/Form/Dropdowns/StatusLabelsDropdown'

const useTableStyles = createStyles(theme => ({
	table: {
		maxWidth: `${theme.breakpoints.md}`,
	},
	firstCell: {
		fontWeight: 'bold',
		textAlign: 'right',
		width: '1px',
	},
}))

interface ICheckinItemsProps {
	assignment: Schema.AssignmentsEdit
	item: Schema.ItemsEdit
	locations: Schema.LocationsOptions[]
	status_labels: Schema.StatusLabelsOptions[]
}

const Checkin = ({ assignment, item, locations, status_labels }: ICheckinItemsProps) => {
	const [itemName, setItemName] = useState(item.name)
	const { classes } = useTableStyles()
	const title = 'Check In Item'

	return (
		<Page title={ title }>
			<Section>
				<Table className={ classes.table }>
					<Table.Body>
						<Table.Row>
							<Table.Cell className={ classes.firstCell }>Model</Table.Cell>
							<Table.Cell>{ item.name }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell className={ classes.firstCell }>Asset Tag</Table.Cell>
							<Table.Cell>{ item.asset_tag }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell className={ classes.firstCell }>Serial</Table.Cell>
							<Table.Cell>{ item.serial }</Table.Cell>
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
							location_id: item?.default_location_id,
						},
						item,
					} }
					to={ Routes.unassignAssignment(assignment) }
					method="patch"
					model="assignment"
				>
					<TextInput
						model="item"
						name="name"
						label="Item Name"
						onChange={ name => setItemName(String(name)) }
						required
					/>

					<LocationsDropdown locations={ locations } />

					<StatusLabelsDropdown status_labels={ status_labels } />

					<DateTime
						label="Returned At"
						name="returned_at"
						required
					/>

					<Textarea
						label="Notes"
						name="notes"
					/>

					<Submit>Check In { itemName }</Submit>

				</Form>
			</Section>
		</Page>
	)
}

export default Checkin
