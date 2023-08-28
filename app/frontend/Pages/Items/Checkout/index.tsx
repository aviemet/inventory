import React from 'react'
import { Box, Heading, Page, Section, Table } from '@/Components'
import { Routes } from '@/lib'
import { DateTime, Form, TextInput, Submit, Textarea } from '@/Components/Form'
import { AssignToableDropdown, AssignmentLocationDropdown } from '@/Components/Form/Components'

import { omit } from 'lodash'

interface ICheckoutItemProps {
	assignment: Schema.AssignmentsFormData
	item: Schema.ItemsEdit
	items: Schema.ItemsOptions[]
	people: Schema.PeopleOptions[]
	locations: Schema.LocationsOptions[]
}

const Checkout = ({ assignment, item, ...models }: ICheckoutItemProps) => {
	const title = 'Checkout Item'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Hardware', href: Routes.items() },
			{ title: item.name!, href: Routes.item(item) },
			{ title: 'Check Out' },
		] }>
			<Section>
				<Heading order={ 3 }>{ title }</Heading>

				<Box sx={ theme => ({ maxWidth: `${theme.breakpoints.sm}` }) }>
					<Table>
						<Table.Body>
							<Table.Row>
								<Table.Cell>Model</Table.Cell>
								<Table.Cell>{ item.model?.name }</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Serial Number</Table.Cell>
								<Table.Cell>{ item.serial }</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Asset Tag</Table.Cell>
								<Table.Cell>{ item.asset_tag }</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Box>

				<Form
					data={ {
						assignment: {
							...omit(assignment, 'status'),
						},
						item: {
							name: item.name,
						},
					} }
					to={ Routes.assignments() }
					model="assignment"
				>
					<TextInput
						model="item"
						name="name"
						label="Item Name"
						required
					/>

					<AssignToableDropdown { ...models } options={ ['Person', 'Item', 'Location'] } />

					<AssignmentLocationDropdown locations={ models.locations } />

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

					<Submit>Checkout { item.name }</Submit>

				</Form>
			</Section>
		</Page>
	)
}

export default Checkout
