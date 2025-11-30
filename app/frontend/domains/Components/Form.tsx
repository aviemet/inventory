import { type HTTPVerb, type UseFormProps } from "use-inertia-form"

import { Grid } from "@/components"
import {
	Form,
	TextInput,
	Textarea,
	Checkbox,
	Submit,
	FormGroup,
} from "@/components/Form"
import { FormModelsDropdown, FormVendorsDropdown, FormLocationsDropdown } from "@/features/Dropdowns"
import { coerceArray } from "@/lib"

type ComponentFormData = {
	component: Schema.ComponentsFormData
}

export interface ComponentFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<ComponentFormData>) => boolean | void
	component: Schema.ComponentsFormData
}

const ComponentForm = ({
	to,
	method = "post",
	onSubmit,
	component,
}: ComponentFormProps) => {
	return (
		<Form
			model="component"
			data={ { component } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="name" label="Name" required />
				</Grid.Col>

				<FormGroup legend="Component Details">
					<Grid.Col>
						<FormModelsDropdown initialData={ coerceArray(component?.model) } />
					</Grid.Col>

					<Grid.Col span={ { sm: 12, md: 6 } }>
						<TextInput name="serial" label="Serial" />
					</Grid.Col>

					<Grid.Col span={ { sm: 12, md: 6 } }>
						<TextInput name="asset_tag" label="Asset Tag" />
					</Grid.Col>

					<Grid.Col span={ { sm: 12, md: 6 } }>
						<TextInput name="qty" label="Quantity" />
					</Grid.Col>

					<Grid.Col span={ { sm: 12, md: 6 } }>
						<TextInput name="min_qty" label="Minimum Quantity" />
					</Grid.Col>
				</FormGroup>

				<FormGroup legend="Purchase Details">
					<Grid.Col>
						<FormVendorsDropdown initialData={ coerceArray(component?.vendor) } />
					</Grid.Col>

					<Grid.Col>
						<TextInput name="cost" label="Cost" />
					</Grid.Col>
				</FormGroup>

				<FormGroup legend="Usage Details">
					<Grid.Col>
						<FormLocationsDropdown
							label="Default Location"
							name="default_location_id"
							initialData={ coerceArray(component?.default_location) }
						/>
					</Grid.Col>

					<Grid.Col>
						<Checkbox name="requestable" label="Requestable" />
					</Grid.Col>

				</FormGroup>

				<Grid.Col>
					<Textarea name="notes" label="Notes" />
				</Grid.Col>

				<Grid.Col>
					<Submit>
						{ component.id ? "Update" : "Create" } Component
					</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default ComponentForm
