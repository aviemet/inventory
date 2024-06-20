import React, { useState } from 'react'
import { Grid } from '@/Components'
import {
	Form,
	TextInput,
	CurrencyInput,
	Textarea,
	Checkbox,
	DateTimeInput,
	Submit,
	FormGroup,
	DynamicInputs,
} from '@/Components/Form'
import {
	FormModelsDropdown,
	FormVendorsDropdown,
	FormLocationsDropdown,
	FormDepartmentsDropdown,
} from '@/Features/Dropdowns'
import { Checkbox as CheckboxInput } from '@/Components/Inputs'
import { coerceArray } from '@/lib'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type ItemFormData = {
	item: Schema.ItemsFormData
}

export interface ItemFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<ItemFormData>) => boolean|void
	item: Schema.ItemsFormData
}

const ItemForm = ({ method = 'post', item, ...props }: ItemFormProps) => {
	const [staticIp, setStaticIp] = useState(false)

	return (
		<Form
			model="item"
			data={ { item } }
			method={ method }
			{ ...props }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="name" label="Name" required />
				</Grid.Col>

				<FormGroup legend="Item Details">
					<Grid.Col>
						<FormModelsDropdown
							modelCategory='Item'
							errorKey="item.model"
							initialData={ coerceArray(item?.model) }
						/>
					</Grid.Col>

					<Grid.Col span={ { sm: 12, md: 6 } }>
						<TextInput name="serial" label="Serial" />
					</Grid.Col>

					<Grid.Col span={ { sm: 12, md: 6 } }>
						<TextInput name="asset_tag" label="Asset Tag" />
					</Grid.Col>

					<Grid.Col>
						<CheckboxInput
							label="Static IP Assignment"
							checked={ staticIp }
							onChange={ e => setStaticIp(e.target.checked) }
							mt="md"
						/>
					</Grid.Col>

					{ staticIp && <DynamicInputs model="nics" emptyData={ {
						mac: '',
						nic_type: '',
					} }>
						<Grid.Col>
							<TextInput name="ip" label="IP Address" />
						</Grid.Col>

						<Grid.Col>
							<TextInput name="mac" label="Mac Address" />
						</Grid.Col>
					</DynamicInputs> }
				</FormGroup>

				<FormGroup legend="Purchase Details">
					<Grid.Col>
						<FormVendorsDropdown initialData={ coerceArray(item?.vendor) } />
					</Grid.Col>

					<Grid.Col span={ { sm: 12, md: 6 } }>
						<CurrencyInput name="cost" label="Cost" />
					</Grid.Col>

					<Grid.Col span={ { sm: 12, md: 6 } }>
						<DateTimeInput label="Purchased At" name="purchased_at" />
					</Grid.Col>
				</FormGroup>

				<FormGroup legend="Usage Details">
					<Grid.Col>
						<FormLocationsDropdown
							label="Default Location"
							name="default_location_id"
							initialData={ coerceArray(item?.default_location) }
							required
						/>
					</Grid.Col>

					<Grid.Col>
						<FormDepartmentsDropdown initialData={ coerceArray(item?.department) } />
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
						{ item.id ? 'Update' : 'Create' } Item
					</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default ItemForm
