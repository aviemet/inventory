import React from 'react'
import {
	Form,
	TextInput,
	Textarea,
	SearchableDropdown,
	DateTime,
	Checkbox,
	Submit,
} from '@/Components/Form'
import { router } from '@inertiajs/react'
import { type UseFormProps } from 'use-inertia-form'

export interface ILicenseFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps) => boolean|void
	license: Schema.License
	categories: Schema.Category[]
	vendors: Schema.Vendor[]
	manufacturers: Schema.Manufacturer[]
}

const LicenseForm = ({ to, method = 'post', onSubmit, license, categories, vendors, manufacturers }: ILicenseFormProps) => {
	return (
		<Form
			model="license"
			data={ { license } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<TextInput name="key" label="Key" required />

			<TextInput name="seats" label="Seats" required />

			<TextInput name="licenser_name" label="Licenser Name" required />

			<TextInput name="licenser_email" label="Licenser Email" required />

			<Checkbox name="reassignable" label="Reassignable" />

			<TextInput name="cost" label="Cost" />

			<DateTime name="purchased_at" label="Purchase Date" />

			<DateTime name="expires_at" label="Expiration Date" />

			<DateTime name="terminates_at" label="Termination Date" />

			<Checkbox name="maintained" label="Maintained" />

			<SearchableDropdown
				label="Manufacturer"
				name="manufacturer_id"
				options={ manufacturers }
				filterMatchKeys={ ['name'] }
				onOpen={ () => router.reload({ only: ['manufacturers'] }) }
			/>

			<SearchableDropdown
				label="Vendor"
				name="vendor_id"
				options={ vendors }
				filterMatchKeys={ ['name'] }
				onOpen={ () => router.reload({ only: ['vendors'] }) }
			/>

			<SearchableDropdown
				label="Category"
				name="category_id"
				options={ categories }
				filterMatchKeys={ ['name'] }
				onOpen={ () => router.reload({ only: ['categories'] }) }
			/>

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ license.id ? 'Update' : 'Create' } License
			</Submit>
		</Form>
	)
}

export default React.memo(LicenseForm)
