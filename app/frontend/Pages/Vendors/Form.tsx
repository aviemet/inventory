import React from 'react'
import { Form, Input, Submit } from '@/Components/Form'
import { ContactForm } from '@/Layouts/AppLayout/Components/Contactable'

export interface IVendorFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	vendor?: Partial<Schema.Vendor>
}

const emptyVendor: Partial<Schema.Vendor> = {
	name: '',
	url: '',
}

const VendorForm = ({ to, method = 'post', onSubmit, vendor = emptyVendor }: IVendorFormProps) => {
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

			<ContactForm />

			<Submit>
				{ vendor.id ? 'Update' : 'Create' } Vendor
			</Submit>
		</Form>
	)
}

export default React.memo(VendorForm)
