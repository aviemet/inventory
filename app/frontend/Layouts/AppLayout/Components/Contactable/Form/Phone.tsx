import React from 'react'
import { DynamicInputs, TextInput } from '@/Components/Form'
// import { NestedFields } from 'use-inertia-form'

const Phone = () => {
	return (
		<DynamicInputs label="Phone Numbers" emptyData={ {
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
