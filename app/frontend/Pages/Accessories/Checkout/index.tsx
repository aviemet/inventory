import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Heading, Section } from '@/Components'
import { Routes } from '@/lib'
import { DateTime, Form, Input, Submit, Textarea, RadioButtons } from '@/Components/Form'
import { AssignToableDropdown, LocationDropdown } from '@/Components/Form/Components'

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
		<>
			<Head title={ title }></Head>

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
						},
						accessory: {
							name: accessory.name
						},
					} }
					to={ Routes.assignments() }
					model="assignment"
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

					<AssignToableDropdown { ...models } options={ ['Person', 'Item', 'Location'] } />

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

					<Submit>Checkout { accessory.name }</Submit>

				</Form>
			</Section>
		</>
	)
}

export default Checkout
