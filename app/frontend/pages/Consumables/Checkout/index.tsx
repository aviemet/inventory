import React from 'react'
import { Title, Page, Section } from '@/components'
import { Routes } from '@/lib'
import { DateTimeInput, Form, NumberInput, Submit, Textarea } from '@/components/Form'
import { AssignToableDropdown, AssignmentLocationDropdown } from '@/features'
import { type UseFormProps } from 'use-inertia-form'

type CheckoutConsumableFormData = {
	assignment: Schema.AssignmentsFormData
	consumable: Schema.Consumable
}

interface CheckoutItemProps {
	assignment: Schema.AssignmentsFormData
	consumable: Schema.Consumable
}

const Checkout = ({ assignment, consumable }: CheckoutItemProps) => {
	const title = `Checkout ${consumable.name}`

	const handleSubmit = ({ transform }: UseFormProps<CheckoutConsumableFormData>) => {
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
			{ title: 'Check Out', href: window.location.href },
		] }>
			<Section>
				<Title order={ 3 }>{ title }</Title>

				<div>
					<div className="item-details">

						<div className="item-row">
							<label>Quantity</label>
							<div className="value">{ consumable.qty }</div>
						</div>

					</div>
				</div>

				<Form<CheckoutConsumableFormData>
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
						options={ ['Item', 'Person', 'Location'] }
					/>

					<AssignmentLocationDropdown />

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
