import { DynamicInputs, Input } from '@/Components/Form'
import React from 'react'
import { NestedFields } from 'use-inertia-form'

const Phone = () => {
	return (
		<DynamicInputs label="Phone Numbers" emptyData={ {
			number: '',
			extenstion: '',
			notes: '',
			category_id: '',
		} } >
			<Input label="Number" name="number" />
			<Input label="Extension" name="extension" />
		</DynamicInputs>
	)
}

export default Phone
