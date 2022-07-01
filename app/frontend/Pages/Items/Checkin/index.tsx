import React, { useState } from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Heading, Section, Table } from '@/Components'
import { Routes } from '@/lib'
import { DateTime, Form, Input, SearchableDropdown, Submit, Textarea } from '@/Components/Form'
import LocationDropdown from './LocationDropdown'
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

interface ICheckinItemsProps {
	assignment: Schema.Assignment
	item: Schema.Item
	locations: Schema.Location[]
	statuses: Schema.StatusType[]
}

const Checkin = ({ assignment, item, locations, statuses }: ICheckinItemsProps) => {
	const [itemName, setItemName] = useState(item.name)
	const { classes } = useTableStyles()
	const title = 'Check In Item'

	return (
		<>
			<Head title={ title }></Head>

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
					to={ Routes.assignment(item) }
					method="patch"
					model="assignment"
				>
					<Input
						model="item"
						name="name"
						label="Item Name"
						onChange={ name => setItemName(String(name)) }
						required
					/>

					<LocationDropdown locations={ locations } />

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

					<Submit>Check In { itemName }</Submit>

				</Form>
			</Section>
		</>
	)
}

export default Checkin
