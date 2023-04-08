import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import { DateTime, Form, NumberInput, Submit, Textarea } from '@/Components/Form'
import { AssignToableDropdown, AssignmentLocationDropdown } from '@/Components/Form/Components'

interface ICheckoutItemProps {
	accessory: Schema.AccessoriesCheckout
	assignment: Schema.AssignmentsNew
	people: Schema.PeopleOptions[]
	items: Schema.ItemsOptions[]
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

				<div>
					<div className="item-details">

						<div className="item-row">
							<label>Model</label>
							<div className="value">{ accessory.name }</div>
						</div>

						<div className="item-row">
							<label>Asset Tag</label>
							<div className="value">{ accessory.asset_tag }</div>
						</div>

						<div className="item-row">
							<label>Serial</label>
							<div className="value">{ accessory.serial }</div>
						</div>

					</div>
				</div>

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

					<Submit>Checkout { accessory.name }</Submit>

				</Form>
			</Section>
		</Page>
	)
}

export default Checkout
