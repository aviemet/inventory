import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Heading, Section } from '@/Components'
import { Routes } from '@/lib'
import { DateTime, Form, Input, Submit, Textarea } from '@/Components/Form'
import { AssignToableDropdown, LocationDropdown } from '@/Components/Form/Components'

interface ICheckoutItemProps {
	assignment: Schema.Assignment
	consumable: Schema.Consumable
	items: Schema.Item[]
	locations: Schema.Location[]
}

const Checkout = ({ assignment, consumable, ...models }: ICheckoutItemProps) => {
	const title = `Checkout ${consumable.name}`

	const handleSubmit = ({ transform }: InertiaFormProps) => {
		transform(data => {
			data.assignment.qty = data.consumable.qty
			data.consumable.qty = consumable.qty - data.consumable.qty
			console.log({ data })
			return data
		})
	}

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Heading order={ 3 }>{ title }</Heading>

				<div>
					<div className="item-details">

						<div className="item-row">
							<label>Quantity</label>
							<div className="value">{ consumable.qty }</div>
						</div>

					</div>
				</div>

				<Form
					data={ {
						assignment: {
							...assignment,
							assignable_id: consumable.id,
							assignable_type: 'Consumable',
						},
						consumable: {
							...consumable,
							qty: 1,
						},
					} }
					to={ Routes.assignments() }
					model="assignment"
					onSubmit={ handleSubmit }
				>

					<AssignToableDropdown
						{ ...models }
						options={ ['Item', 'Person', 'Location'] }
					/>

					<LocationDropdown locations={ models.locations } />

					<DateTime
						label="Assigned At"
						name="assigned_at"
						required
					/>

					<Input
						label="Quantity"
						model="consumable"
						name="qty"
						type="number"
						min={ 1 }
						max={ consumable.qty ? consumable.qty : 1 }
					/>

					<Textarea
						label="Notes"
						name="notes"
					/>

					<Submit>Checkout { consumable.name }</Submit>

				</Form>
			</Section>
		</>
	)
}

export default Checkout
