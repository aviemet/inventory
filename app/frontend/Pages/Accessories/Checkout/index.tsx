import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import { DateTime, Form, Input, Submit, Textarea } from '@/Components/Form'
import { AssignToableDropdown, AssignmentLocationDropdown } from '@/Components/Form/Components'

interface ICheckoutItemProps {
	assignment: Schema.Assignment
	accessory: Schema.Accessory
	items: Schema.Item[]
	people: Schema.Person[]
	locations: Schema.Location[]
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

					<Input type="number" label="Quantity" name="qty" />

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
