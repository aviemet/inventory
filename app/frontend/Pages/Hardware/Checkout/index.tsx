import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import { DateTime, Form, Input, Submit, Textarea } from '@/Components/Form'
import { AssignToableDropdown, LocationDropdown } from '@/Components/Form/Components'

import { omit } from 'lodash'

interface ICheckoutHardwareProps {
	assignment: Schema.Assignment
	hardware: Schema.Hardware
	hardwares: Schema.Hardware[]
	people: Schema.Person[]
	locations: Schema.Location[]
}

const Checkout = ({ assignment, hardware, ...models }: ICheckoutHardwareProps) => {
	const title = 'Checkout Hardware'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Hardware', href: Routes.hardware() },
			{ title: hardware.name!, href: Routes.hardware(hardware) },
			{ title: 'Check Out' },
		] }>
			<Section>
				<Heading order={ 3 }>{ title }</Heading>

				<div>
					<div className="hardware-details">

						<div className="hardware-row">
							<label>Model</label>
							<div className="value">{ hardware.name }</div>
						</div>

						<div className="hardware-row">
							<label>Asset Tag</label>
							<div className="value">{ hardware.asset_tag }</div>
						</div>

						<div className="hardware-row">
							<label>Serial</label>
							<div className="value">{ hardware.serial }</div>
						</div>

					</div>
				</div>

				<Form
					data={ {
						assignment: {
							...omit(assignment, 'status'),
						},
						hardware: {
							name: hardware.name
						},
					} }
					to={ Routes.assignments() }
					model="assignment"
				>
					<Input
						model="hardware"
						name="name"
						label="Hardware Name"
						required
					/>

					<AssignToableDropdown { ...models } options={ ['Person', 'Hardware', 'Location'] } />

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

					<Submit>Checkout { hardware.name }</Submit>

				</Form>
			</Section>
		</Page>
	)
}

export default Checkout
