import React from "react"
import { type HTTPVerb, type UseFormProps } from "use-inertia-form"

import { Grid } from "@/components"
import {
	Form,
	TextInput,
	Textarea,
	Checkbox,
	Submit,
	FormGroup,
	CurrencyInput,
	NumberInput,
} from "@/components/Form"
import { FormLocationsDropdown, FormModelsDropdown, FormVendorsDropdown } from "@/features/Dropdowns"
import { coerceArray } from "@/lib"

type ConsumableFormData = {
	consumable: Schema.ConsumablesFormData
}

export interface ConsumableFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<ConsumableFormData>) => boolean | void
	consumable: Schema.ConsumablesFormData
}

const ConsumableForm = ({ to, method = "post", onSubmit, consumable }: ConsumableFormProps) => {
	return (
		<Form
			model="consumable"
			data={ { consumable } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
			className="max-w-5xl"
		>
			<Grid>

				<Grid.Col>
					<TextInput name="name" label="Name" required />
				</Grid.Col>

				<FormGroup legend="Consumable Details">

					<Grid.Col>
						<FormModelsDropdown
							initialData={ coerceArray(consumable?.model) }
							errorKey="consumable.model"
							modelCategory="Consumable"
						/>
					</Grid.Col>

					<Grid.Col span={ { sm: 12, md: 6 } }>
						<TextInput name="serial" label="Serial" />
					</Grid.Col>

					<Grid.Col span={ { sm: 12, md: 6 } }>
						<TextInput name="asset_tag" label="Asset Tag" />
					</Grid.Col>

					<Grid.Col span={ { sm: 12, md: 6 } }>
						<NumberInput name="qty" label="Quantity" />
					</Grid.Col>

					<Grid.Col span={ { sm: 12, md: 6 } }>
						<NumberInput name="min_qty" label="Minimum Quantity" />
					</Grid.Col>

				</FormGroup>

				<FormGroup legend="Purchase Details">

					<Grid.Col>
						<FormVendorsDropdown initialData={ coerceArray(consumable?.vendor) } />
					</Grid.Col>

					<Grid.Col>
						<CurrencyInput name="cost" label="Cost" />
					</Grid.Col>

				</FormGroup>

				<FormGroup legend="Usage Details">

					<Grid.Col>
						<FormLocationsDropdown
							label="Default Location"
							name="default_location_id"
							initialData={ coerceArray(consumable?.default_location) }
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
					<Submit className="w-full">
						{ consumable.id ? "Update" : "Create" } Consumable
					</Submit>
				</Grid.Col>

			</Grid>
		</Form>
	)
}

export default ConsumableForm
