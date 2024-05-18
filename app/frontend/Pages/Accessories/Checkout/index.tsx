import React from 'react'
import { Box, Heading, Page, Section, Table } from '@/Components'
import { Routes } from '@/lib'
import { DateTimeInput, Form, NumberInput, Submit, Textarea } from '@/Components/Form'
import { AssignToableDropdown, AssignmentLocationDropdown } from '@/Features'

export type TAccessoryCheckoutFormData = {
	assignment: Schema.AssignmentsFormData
}

interface ICheckoutItemProps {
	accessory: Schema.AccessoriesEdit
	assignment: Schema.AssignmentsFormData
	items: Schema.ItemsOptions[]
	people: Schema.PeopleOptions[]
	locations: Schema.LocationsOptions[]
}

const Checkout = ({ assignment, accessory, ...models }: ICheckoutItemProps) => {
	const title = 'Checkout Accessory'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Accessories', href: Routes.accessories() },
			{ title: accessory.name!, href: Routes.accessory(accessory) },
			{ title: 'Check Out' },
		] }>

			<Section>
				<Heading order={ 3 }>{ title }</Heading>

				<Box style={ theme => ({ maxWidth: `${theme.breakpoints.sm}` }) }>
					<Table>
						<Table.Body>
							<Table.Row>
								<Table.Cell>Model</Table.Cell>
								<Table.Cell>{ accessory.model?.name }</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Serial Number</Table.Cell>
								<Table.Cell>{ accessory.serial }</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Asset Tag</Table.Cell>
								<Table.Cell>{ accessory.asset_tag }</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table>
				</Box>

				<Form
					data={ {
						assignment: {
							...assignment,
							assignable_id: accessory.id,
							assignable_type: 'Accessory',
							qty: 1,
						},
					} }
					to={ Routes.assignments() }
					model="assignment"
				>

					<AssignToableDropdown
						{ ...models }
						options={ ['Person', 'Item', 'Location'] }
					/>

					<AssignmentLocationDropdown locations={ models.locations } />

					<NumberInput label="Quantity" name="qty" />

					<DateTimeInput
						label="Assigned At"
						name="assigned_at"
						required
						span={ 6 }
					/>

					<DateTimeInput
						label="Expected At"
						name="expected_at"
						span={ 6 }
					/>

					<Textarea
						label="Notes"
						name="notes"
					/>

					<Submit>Checkout { accessory.name }</Submit>

				</Form>
			</Section>
		</Page>
	)
}

export default Checkout
