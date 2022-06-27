import React from 'react'
import {
	Form,
	Input,
	Textarea,
	SearchableDropdown,
	DateTime,
	Checkbox,
	Submit,
} from '@/Components/Form'
import { Inertia } from '@inertiajs/inertia'

export interface ILicenseFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
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
			<Input name="name" label="Name" required autoFocus />

			<Input name="key" label="Key" required />

			<Input name="seats" label="Seats" required />

			<Input name="licenser_name" label="Licenser Name" required />

			<Input name="licenser_email" label="Licenser Email" required />

			<Checkbox name="reassignable" label="Reassignable" />

			<Input name="cost" label="Cost" />

			<DateTime name="purchased_at" label="Purchase Date" />

			<DateTime name="expires_at" label="Expiration Date" />

			<DateTime name="terminates_at" label="Termination Date" />

			<Checkbox name="maintained" label="Maintained" />

			<SearchableDropdown
				label="Manufacturer"
				name="manufacturer_id"
				options={ manufacturers }
				filterMatchKeys={ ['name'] }
				onOpen={ () => Inertia.reload({ only: ['manufacturers'] }) }
			/>

			<SearchableDropdown
				label="Vendor"
				name="vendor_id"
				options={ vendors }
				filterMatchKeys={ ['name'] }
				onOpen={ () => Inertia.reload({ only: ['vendors'] }) }
			/>

			<SearchableDropdown
				label="Category"
				name="category_id"
				options={ categories }
				filterMatchKeys={ ['name'] }
				onOpen={ () => Inertia.reload({ only: ['categories'] }) }
			/>

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ license.id ? 'Update' : 'Create' } License
			</Submit>
		</Form>
	)
}

export default React.memo(LicenseForm)
