import React from 'react'
import { DynamicInputs, TextInput } from '@/Components/Form'

const Phone = () => {
	return (
		<DynamicInputs model="phones" label="Phone Numbers" emptyData={ {
			number: '',
			extension: '',
			notes: '',
			category_id: '',
		} } >
			<TextInput label="Number" name="number" />
			<TextInput label="Extension" name="extension" />
		</DynamicInputs>
	)
}

export default Phone
