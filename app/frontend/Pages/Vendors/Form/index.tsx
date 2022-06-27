import React from 'react'
import { Form, Input, Submit } from '@/Components/Form'

export interface IVendorFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	vendor: Schema.Vendor
}

const VendorForm = ({ to, method = 'post', onSubmit, vendor }: IVendorFormProps) => {
	return (
		<Form
			model="vendor"
			data={ { vendor } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Input name="name" label="Name" required autoFocus />

			<Input name="url" label="Website" />

			<Submit>
				{ vendor.id ? 'Update' : 'Create' } Vendor
			</Submit>
		</Form>
	)
}

export default React.memo(VendorForm)
