import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Breadcrumbs, Heading, Section } from '@/Components'
import { Routes } from '@/lib'
import { DateTime, Form, Submit, Textarea } from '@/Components/Form'
import { AssignToableDropdown, LocationDropdown } from '@/Components/Form/Components'
import { breadcrumbs } from '../utils'

interface ICheckoutItemProps {
	assignment: Schema.Assignment
	component: Schema.Component
	items: Schema.Item[]
	locations: Schema.Location[]
}

const Checkout = ({ assignment, component, ...models }: ICheckoutItemProps) => {
	const title = `Checkout ${component.name}`

	return (
		<>
			<Head title={ title }></Head>

			<Breadcrumbs>{ breadcrumbs.checkout(component) }</Breadcrumbs>

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
							assignable_type: 'Component'
						},
					} }
					to={ Routes.assignments() }
					model="assignment"
				>

					<AssignToableDropdown
						{ ...models }
						options={ ['Item'] }
					/>

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

					<Submit>Checkout { component.name }</Submit>

				</Form>
			</Section>
		</>
	)
}

export default Checkout
