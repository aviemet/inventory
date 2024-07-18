import React from 'react'
import { Grid } from '@/Components'
import { DynamicInputs, Textarea, TextInput } from '@/Components/Form'
import { FormCategoriesDropdown } from '@/Features/Dropdowns'

const Website = () => {
	return (
		<DynamicInputs model="websites" emptyData={ {
			url: '',
			name: '',
			notes: '',
			category_id: '',
		} } >
			<Grid.Col>
				<TextInput label="Name" name="name" />
			</Grid.Col>

			<Grid.Col>
				<TextInput label="Address" name="url" />
			</Grid.Col>

			<Grid.Col>
				<FormCategoriesDropdown categorizable_type="Website" />
			</Grid.Col>

			<Grid.Col>
				<Textarea name="notes" label="Notes" />
			</Grid.Col>
		</DynamicInputs>
	)
}

export default Website
