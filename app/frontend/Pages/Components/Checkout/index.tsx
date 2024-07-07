import React from 'react'
import { Grid, Heading, Page, Section } from '@/Components'
import { DateTimeInput, Form, Submit, Textarea } from '@/Components/Form'
import { AssignToableDropdown, AssignmentLocationDropdown } from '@/Features'
import { Routes } from '@/lib'

interface CheckoutItemProps {
	assignment: Schema.AssignmentsFormData
	component: Schema.ComponentsShow
	items: Schema.ItemsOptions[]
}

const Checkout = ({ assignment, component, items }: CheckoutItemProps) => {
	const title = `Checkout ${component.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Components', href: Routes.components() },
			{ title: component.name, href: Routes.component(component) },
			{ title: 'Check Out', href: window.location.href },
		] }>
			<Section>
				<Title order={ 1 } size="h3" mb="sm">{ title }</Title>

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
					<Grid>
						<Grid.Col>
							<AssignToableDropdown
								options={ ['Item'] }
								items={ items }
							/>
						</Grid.Col>

						<Grid.Col>
							<AssignmentLocationDropdown />
						</Grid.Col>

						<Grid.Col span={ { sm: 12, md: 6 } }>
							<DateTimeInput
								label="Assigned At"
								name="assigned_at"
								required
							/>
						</Grid.Col>

						<Grid.Col span={ { sm: 12, md: 6 } }>
							<DateTimeInput
								label="Expected At"
								name="expected_at"
							/>
						</Grid.Col>

						<Grid.Col>
							<Textarea
								label="Notes"
								name="notes"
							/>
						</Grid.Col>

						<Grid.Col>
							<Submit>Checkout { component.name }</Submit>
						</Grid.Col>

					</Grid>
				</Form>
			</Section>
		</Page>
	)
}

export default Checkout
