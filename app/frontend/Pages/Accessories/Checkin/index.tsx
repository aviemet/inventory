import React, { useState } from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Heading, Section, Table } from '@/Components'
import { Routes } from '@/lib'
import { DateTime, Form, Input, SearchableDropdown, Submit, Textarea } from '@/Components/Form'
import { createStyles } from '@mantine/core'
import { omit } from 'lodash'

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

interface ICheckinAccessoriesProps {
	assignment: Schema.Assignment
	accessory: Schema.Accessory
	statuses: Schema.StatusType[]
}

const Checkin = ({ assignment, accessory, statuses }: ICheckinAccessoriesProps) => {
	const [accessoryName, setAccessoryName] = useState(accessory.name)
	const { classes } = useTableStyles()
	const title = 'Check In Accessory'

	return (
		<>
			<Head title={ title }></Head>

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
				<Heading order={ 3 }>{ title }</Heading>

				<Form
					data={ {
						assignment: omit(assignment, 'id', 'created_by_id'),
						accessory,
					} }
					to={ Routes.unassignAssignment(assignment) }
					method="patch"
					model="assignment"
				>
					<Input
						model="accessory"
						name="name"
						label="Accessory Name"
						onChange={ name => setAccessoryName(String(name)) }
						required
					/>

					{ /* TODO: Deal with quantity return status assignments  */ }
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

					<Submit>Check In { accessoryName }</Submit>

				</Form>
			</Section>
		</>
	)
}

export default Checkin
