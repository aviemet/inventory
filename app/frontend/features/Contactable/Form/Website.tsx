import React from 'react'
import { Grid } from '@/components'
import { DynamicInputs, Textarea, TextInput } from '@/components/Form'
import { FormCategoriesDropdown } from '@/features/Dropdowns'

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
