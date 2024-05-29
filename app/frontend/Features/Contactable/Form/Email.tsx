import React from 'react'
import { Grid } from '@/Components'
import { DynamicInputs, Textarea, TextInput } from '@/Components/Form'
import { FormCategoriesDropdown } from '@/Features/Dropdowns'

const Email = () => {
	return (
		<DynamicInputs model="emails" label="Email Addresses" emptyData={ {
			email: '',
			notes: '',
			category_id: '',
		} } >
			<Grid.Col>
				<TextInput label="Email Address" name="email" />
			</Grid.Col>

			<Grid.Col>
				<FormCategoriesDropdown categorizable_type="Email" />
			</Grid.Col>

			<Grid.Col>
				<Textarea name="notes" label="Notes" />
			</Grid.Col>
		</DynamicInputs>
	)
}

export default Email
