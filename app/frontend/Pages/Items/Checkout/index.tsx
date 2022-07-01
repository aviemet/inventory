import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import { Routes } from '@/lib'
import { DateTime, Form, Input, Submit, Textarea, RadioButtons } from '@/Components/Form'
import AssignToableDropdown from './AssignToableDropdown'
import LocationDropdown from './LocationDropdown'

interface ICheckoutItemProps {
	assignment: Schema.Assignment
	item: Schema.Item
	items: Schema.Item[]
	people: Schema.Person[]
	locations: Schema.Location[]
}

const Checkout = ({ assignment, item, ...models }: ICheckoutItemProps) => {
	const title = 'Checkout Item'

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h3>{ title }</h3>

				<div>
					<div className="item-details">

						<div className="item-row">
							<label>Model</label>
							<div className="value">{ item.name }</div>
						</div>

						<div className="item-row">
							<label>Asset Tag</label>
							<div className="value">{ item.asset_tag }</div>
						</div>

						<div className="item-row">
							<label>Serial</label>
							<div className="value">{ item.serial }</div>
						</div>

					</div>
				</div>

				<Form
					data={ {
						assignment: {
							...assignment,
							assignable_id: item.id,
							assignable_type: 'Item',
							assign_toable_type: 'Person',
						},
						item: {
							name: item.name
						},
					} }
					to={ Routes.assignments() }
					model="assignment"
					onChange={ ({ data }) => console.log({ data }) }
				>
					<Input
						model="item"
						name="name"
						label="Item Name"
						required
					/>

					<RadioButtons
						label="Checkout To"
						name="assign_toable_type"
						options={ [
							{ label: 'Person', value: 'Person' },
							{ label: 'Item', value: 'Item' },
							{ label: 'Location', value: 'Location' },
						] }
						required
					/>
					<AssignToableDropdown { ...models } />

					<LocationDropdown locations={ models.locations } />

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
		</>
	)
}

export default Checkout
