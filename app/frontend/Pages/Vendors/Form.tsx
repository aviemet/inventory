import React from 'react'
import { Form, TextInput, Submit } from '@/Components/Form'
import { ContactForm } from '@/Layouts/AppLayout/Components/Contactable'
import { type UseFormProps } from 'use-inertia-form'

type TVendorFormData = {
	vendor: Schema.VendorsFormData
}

export interface IVendorFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TVendorFormData>) => boolean|void
	vendor?: Schema.VendorsFormData
}

const emptyVendor: Schema.VendorsFormData = {
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
