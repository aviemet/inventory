import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { ContactForm } from '@/Features/Contactable'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type VendorFormData = {
	vendor: Schema.VendorsFormData
}

export interface VendorFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<VendorFormData>) => boolean|void
	vendor?: Schema.VendorsFormData
}

const emptyVendor: Schema.VendorsFormData = {
	name: '',
	url: '',
}

const VendorForm = ({ to, method = 'post', onSubmit, vendor = emptyVendor }: VendorFormProps) => {
	return (
		<Form
			model="vendor"
			data={ { vendor } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<TextInput name="url" label="Website" />

			<ContactForm contact={ vendor?.contact } />

			<Submit>
				{ vendor.id ? 'Update' : 'Create' } Vendor
			</Submit>
		</Form>
	)
}

export default React.memo(VendorForm)
