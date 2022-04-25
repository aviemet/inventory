import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Form, Input, RadioButtons, SearchableDropdown } from '@/Components/Form'
import AssignToableDropdown from './AssignToableDropdown'
import { Routes } from '@/lib'

interface ICheckoutItemProps {
	assignment: Schema.Assignment
	item: Schema.Item
}

const Checkout = ({ assignment, item, ...models }: ICheckoutItemProps) => {
	const title = 'Checkout Item'
	console.log({ models })

	const handleAssignToableChange = ({ value }) => {
	}

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
					data={ assignment }
					to={ Routes.assignments({ id: item.id }) }
					model="assignment"
				>
					<Input model="item" name="name" label="Item Name" required />

					<RadioButtons
						label="Checkout To"
						name="assign_toable_type"
						options={ [
							{ label: 'Person', value: 'Person' },
							{ label: 'Item', value: 'Item' },
							{ label: 'Location', value: 'Location' },
						] }
						onChange={ handleAssignToableChange }
					/>

					<AssignToableDropdown { ...models } />

				</Form>
			</section>
		</>
	)
}

export default Checkout
