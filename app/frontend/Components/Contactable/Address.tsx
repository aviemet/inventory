import React from 'react'
import { FormGroup, Input, Textarea } from '@/Components/Form'

const Address = () => {
	return (
		<>
			<Input name="address" label="Address" />

			<Input name="address_2" label="Address 2" />

			<Input name="city" label="City" />

			<Input name="region" label="State" />

			<Input name="country" label="Country" />

			<Input name="postal" label="Zip/Post" />

			<Textarea name="notes" label="Notes" />
		</>
	)
}

export default Address
