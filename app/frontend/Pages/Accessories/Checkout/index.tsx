import React from 'react'
import { Box, Title, Page, Section, Table } from '@/components'
import { Routes } from '@/lib'
import { DateTimeInput, Form, NumberInput, Submit, Textarea } from '@/components/Form'
import { AssignToableDropdown, AssignmentLocationDropdown } from '@/Features'

export type AccessoryCheckoutFormData = {
	assignment: Schema.AssignmentsFormData
}

interface CheckoutItemProps {
	accessory: Schema.AccessoriesEdit
	assignment: Schema.AssignmentsFormData
	items: Schema.ItemsOptions[]
	people: Schema.PeopleOptions[]
	locations: Schema.LocationsOptions[]
}

const Checkout = ({ assignment, accessory, ...models }: CheckoutItemProps) => {
	const title = 'Checkout Accessory'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Accessories', href: Routes.accessories() },
			{ title: accessory.name!, href: Routes.accessory(accessory) },
			{ title: 'Check Out', href: window.location.href },
		] }>

			<Section>
				<Title order={ 3 }>{ title }</Title>

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

					<AssignmentLocationDropdown />

					<NumberInput label="Quantity" name="qty" />

					<DateTimeInput
						label="Assigned At"
						name="assigned_at"
						required
					/>

					<DateTimeInput
						label="Expected At"
						name="expected_at"
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
