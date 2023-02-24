import React from 'react'
import { DynamicInputs, Input } from '@/Components/Form'
// import { NestedFields } from 'use-inertia-form'

const Phone = () => {
	return (
		<DynamicInputs label="Phone Numbers" emptyData={ {
			number: '',
			extension: '',
			notes: '',
			category_id: '',
		} } >
			<Input label="Number" name="number" />
			<Input label="Extension" name="extension" />
		</DynamicInputs>
	)
}

export default Phone
