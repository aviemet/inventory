import React from 'react'
import { Grid } from '@/Components'
import { DynamicInputs, Textarea, TextInput } from '@/Components/Form'
import { FormCategoriesDropdown } from '@/Features/Dropdowns'

const Address = () => {
	return (
		<DynamicInputs model="address" label="Addresses" emptyData={ {
			address: '',
			address_2: '',
			city: '',
			region: '',
			postal: '',
			notes: '',
			category_id: '',
		} }>
			<Grid.Col>
				<TextInput name="address" label="Address" />
			</Grid.Col>

			<Grid.Col>
				<TextInput name="address_2" label="Address 2" />
			</Grid.Col>

			<Grid.Col>
				<TextInput name="city" label="City" />
			</Grid.Col>

			<Grid.Col span={ { sm: 12, md: 6 } }>
				<TextInput name="region" label="State" />
			</Grid.Col>

			<Grid.Col span={ { sm: 12, md: 6 } }>
				<TextInput name="postal" label="Zip/Post" />
			</Grid.Col>

			<Grid.Col>
				<FormCategoriesDropdown label="Address Type" categorizable_type="Address" />
			</Grid.Col>

			<Grid.Col>
				<Textarea name="notes" label="Notes" />
			</Grid.Col>

		</DynamicInputs>
	)
}

export default Address
