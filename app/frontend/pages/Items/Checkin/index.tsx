import React, { useState } from 'react'
import { Title, Page, Section, Table } from '@/components'
import { Routes } from '@/lib'
import { DateTimeInput, Form, TextInput, Submit, Textarea } from '@/components/Form'
import { FormLocationsDropdown, FormStatusLabelsDropdown } from '@/features/Dropdowns'
import * as classes from './Checkin.css'

interface CheckinItemsProps {
	assignment: Schema.AssignmentsEdit
	item: Schema.ItemsEdit
	locations: Schema.LocationsOptions[]
	status_labels: Schema.StatusLabelsOptions[]
}

const Checkin = ({ assignment, item, locations, status_labels }: CheckinItemsProps) => {
	const [itemName, setItemName] = useState(item.name)
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
				<Title order={ 3 }>{ title }</Title>

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

					<FormLocationsDropdown />

					<FormStatusLabelsDropdown />

					<DateTimeInput
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
