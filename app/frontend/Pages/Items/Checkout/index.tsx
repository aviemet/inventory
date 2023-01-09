import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import { DateTime, Form, Input, Submit, Textarea } from '@/Components/Form'
import { AssignToableDropdown, AssignmentLocationDropdown } from '@/Components/Form/Components'

import { omit } from 'lodash'

import { omit } from 'lodash'

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
		<Page title={ title } breadcrumbs={ [
			{ title: 'Hardware', href: Routes.items() },
			{ title: item.name!, href: Routes.item(item) },
			{ title: 'Check Out' },
		] }>
			<Section>
				<Heading order={ 3 }>{ title }</Heading>

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
							...omit(assignment, 'status'),
						},
						item: {
							name: item.name,
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

					<AssignToableDropdown { ...models } options={ ['Person', 'Item', 'Location'] } />

					<AssignmentLocationDropdown locations={ models.locations } />

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
		</Page>
	)
}

export default Checkout
