import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import { DateTimeInput, Form, Submit, Textarea } from '@/Components/Form'
import { AssignToableDropdown, AssignmentLocationDropdown } from '@/Features'

interface CheckoutItemProps {
	assignment: Schema.AssignmentsFormData
	component: Schema.Component
}

const Checkout = ({ assignment, component }: CheckoutItemProps) => {
	const title = `Checkout ${component.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Components', href: Routes.components() },
			{ title: component.name, href: Routes.component(component) },
			{ title: 'Check Out' },
		] }>
			<Section>
				<Heading order={ 3 }>{ title }</Heading>

				<div>
					<div className="item-details">

						<div className="item-row">
							<label>Serial</label>
							<div className="value">{ component.serial }</div>
						</div>

					</div>
				</div>

				<Form
					data={ {
						assignment: {
							...assignment,
							assignable_id: component.id,
							assignable_type: 'Component',
						},
					} }
					to={ Routes.assignments() }
					model="assignment"
				>

					<AssignToableDropdown
						options={ ['Item'] }
					/>

					<AssignmentLocationDropdown />

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

					<Submit>Checkout { component.name }</Submit>

				</Form>
			</Section>
		</Page>
	)
}

export default Checkout
