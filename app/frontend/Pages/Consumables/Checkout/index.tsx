import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import { DateTimeInput, Form, NumberInput, Submit, Textarea } from '@/Components/Form'
import { AssignToableDropdown, AssignmentLocationDropdown } from '@/Components/Form/Components'
import { type UseFormProps } from 'use-inertia-form'

type TCheckoutConsumableFormData = {
	assignment: Schema.AssignmentsFormData
	consumable: Schema.Consumable
}

interface ICheckoutItemProps {
	assignment: Schema.AssignmentsFormData
	consumable: Schema.Consumable
	items: Schema.ItemsOptions[]
	locations: Schema.LocationsOptions[]
}

const Checkout = ({ assignment, consumable, ...models }: ICheckoutItemProps) => {
	const title = `Checkout ${consumable.name}`

	const handleSubmit = ({ transform }: UseFormProps<TCheckoutConsumableFormData>) => {
		transform(data => {
			data.assignment.qty = data.consumable.qty!
			data.consumable.qty = consumable.qty! - data.consumable.qty!
			return data
		})
	}

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Consumables', href: Routes.consumables() },
			{ title: consumable.name!, href: Routes.consumable(consumable) },
			{ title: 'Check Out' },
		] }>
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

					<AssignmentLocationDropdown locations={ models.locations } />

					<DateTimeInput
						label="Assigned At"
						name="assigned_at"
						required
					/>

					<NumberInput
						label="Quantity"
						model="consumable"
						name="qty"
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
		</Page>
	)
}

export default Checkout
