import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { DateTime, Form, Input, RadioButtons, Submit, Textarea } from '@/Components/Form'
import AssignToableDropdown from './AssignToableDropdown'
import { Routes } from '@/lib'

interface ICheckoutItemProps {
	assignment: Schema.Assignment
	item: Schema.Item
	items: Schema.Item[]
	people: Schema.Person[]
	locations: Schema.Location[]
}

const Checkout = ({ assignment, item, ...models }: ICheckoutItemProps) => {
	const title = 'Checkout Item'

	// const handleFormChange = form => {

	// }

	// const handleSubmit = ({ transform }) => {
	// 	transform(data => {
	// 		const assignment = {}
	// 		const item = {}

	// 		for(const key in data) {
	// 			if(key.indexOf('/') >= 0) {
	// 				const parts = key.split('/')
	// 				item[parts[1]] = data[key]
	// 			} else {
	// 				assignment[key] = data[key]
	// 			}
	// 		}
	// 		return { assignment, item }
	// 	})
	// }

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
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

						<div className="item-row">
							<label>Other Userful Data</label>
							<div className="value">Something Else?</div>
						</div>

					</div>
				</div>

				<Form
					data={ {
						...assignment,
						'item/name': item.name
					} }
					to={ Routes.assignments({ id: item.id }) }
					model="assignment"
					className="max-w-5xl"
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
			</section>
		</>
	)
}

export default Checkout
