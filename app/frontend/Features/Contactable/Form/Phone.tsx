import React from 'react'
import { Grid } from '@/Components'
import { DynamicInputs, TextInput } from '@/Components/Form'
import { FormCategoriesDropdown } from '@/Features/Dropdowns'

const Phone = () => {
	return (
		<DynamicInputs model="phones" label="Phone Numbers" emptyData={ {
			number: '',
			extension: '',
			notes: '',
			category_id: '',
		} } >
			<Grid.Col>
				<TextInput label="Number" name="number" />
			</Grid.Col>

			<Grid.Col>
				<TextInput label="Extension" name="extension" />
			</Grid.Col>

			<Grid.Col>
				<FormCategoriesDropdown />
			</Grid.Col>
		</DynamicInputs>
	)
}

export default Phone
