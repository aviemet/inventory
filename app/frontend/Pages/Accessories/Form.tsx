import React from 'react'
import { Grid } from '@/Components'
import {
	Form,
	TextInput,
	Textarea,
	Checkbox,
	Submit,
	FormGroup,
	CurrencyInput,
} from '@/Components/Form'
import { FormModelsDropdown, FormVendorsDropdown, FormLocationsDropdown } from '@/Features/Dropdowns'
import { coerceArray } from '@/lib'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type AccessoryFormData = {
	accessory: Schema.AccessoriesFormData
}

export interface AccessoryFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<AccessoryFormData>) => boolean|void
	accessory: Schema.AccessoriesFormData
}

const AccessoryForm = ({ to, method = 'post', onSubmit, accessory }: AccessoryFormProps) => {

	return (
		<Form
			model="accessory"
			data={ { accessory } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="name" label="Name" required autoFocus />
				</Grid.Col>

				<FormGroup legend="Accessory Details">
					<Grid.Col>
						<FormModelsDropdown modelCategory="Accessory" initialData={ coerceArray(accessory?.model) } />
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

					{ /* TODO: Alert options dialog */ }
					<Grid.Col span={ { sm: 12, md: 6 } }>
						<TextInput name="min_qty" label="Minimum Quantity" />
					</Grid.Col>
				</FormGroup>

				<FormGroup legend="Purchase Details">
					<Grid.Col>
						<FormVendorsDropdown initialData={ coerceArray(accessory?.vendor) } />
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
							initialData={ coerceArray(accessory?.default_location) }
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
						{ accessory.id ? 'Update' : 'Create' } Accessory
					</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default AccessoryForm
