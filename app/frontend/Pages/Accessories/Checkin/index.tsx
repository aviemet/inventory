import React, { useMemo, useState } from 'react'
import { Page, Title, Section, Table } from '@/components'
import { Routes } from '@/lib'
import { DateTimeInput, Form, TextInput, Select, Submit, Textarea } from '@/components/Form'
import * as classes from './Checkin.css'

interface CheckinAccessoriesProps {
	accessory: Schema.AccessoriesEdit
	assignment: Schema.AssignmentsEdit
	statuses: Schema.StatusLabelsOptions[]
}

const Checkin = ({ assignment, accessory, statuses }: CheckinAccessoriesProps) => {
	const [accessoryName, setAccessoryName] = useState(accessory.name)
	const title = 'Check In Accessory'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Accessories', href: Routes.accessories() },
			{ title: accessory.name!, href: Routes.accessory(accessory) },
			{ title: 'Check In', href: window.location.href },
		] }>

			<Section>
				<Table className={ classes.table }>
					<Table.Body>
						<Table.Row>
							<Table.Cell className={ classes.firstCell }>Model</Table.Cell>
							<Table.Cell>{ accessory.name }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell className={ classes.firstCell }>Asset Tag</Table.Cell>
							<Table.Cell>{ accessory.asset_tag }</Table.Cell>
						</Table.Row>

						<Table.Row>
							<Table.Cell className={ classes.firstCell }>Serial</Table.Cell>
							<Table.Cell>{ accessory.serial }</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</Section>

			<Section>
				<Title order={ 3 }>{ title }</Title>

				<Form
					data={ {
						assignment,
						accessory,
					} }
					to={ Routes.unassignAssignment(assignment) }
					method="patch"
					model="assignment"
				>
					<TextInput
						model="accessory"
						name="name"
						label="Accessory Name"
						onChange={ name => setAccessoryName(String(name)) }
						required
					/>

					{ /* TODO: Deal with quantity return status assignments  */ }
					<Select
						options={ useMemo(() => {
							return statuses.map(status => ({
								label: status.name,
								value: String(status.id),
							}))
						}, [statuses]) }
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

					<Submit>Check In { accessoryName }</Submit>

				</Form>
			</Section>
		</Page>
	)
}

export default Checkin
