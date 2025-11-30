import React from "react"
import { type HTTPVerb, type UseFormProps } from "use-inertia-form"

import { Grid } from "@/components"
import { Form, TextInput, Submit } from "@/components/Form"
import { ContactForm } from "@/features/Contactable"

type VendorFormData = {
	vendor: Schema.VendorsFormData
}

export interface VendorFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<VendorFormData>) => boolean | void
	vendor?: Schema.VendorsFormData
}

const emptyVendor: Schema.VendorsFormData = {
	name: "",
	url: "",
	contact: {
		primary_address_id: NaN,
		primary_email_id: NaN,
		primary_phone_id: NaN,
		phones: [],
		emails: [],
		addresses: [],
		websites: [],
	},
}

const VendorForm = ({ to, method = "post", onSubmit, vendor = emptyVendor }: VendorFormProps) => {
	return (
		<Form
			model="vendor"
			data={ { vendor } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="name" label="Name" required />
				</Grid.Col>

				<Grid.Col>
					<TextInput name="url" label="Website" />
				</Grid.Col>

				<Grid.Col>
					<ContactForm contact={ vendor?.contact } />
				</Grid.Col>

				<Grid.Col>
					<Submit>
						{ vendor.id ? "Update" : "Create" } Vendor
					</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default VendorForm
