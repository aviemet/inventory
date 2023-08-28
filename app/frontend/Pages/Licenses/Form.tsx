import React from 'react'
import {
	Form,
	TextInput,
	Textarea,
	DateTime,
	Checkbox,
	Submit,
	CurrencyInput,
	Date,
	NumberInput, // TODO: Replace DateTime uses with Date after fixing it
} from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'
import { CategoriesDropdown, ManufacturersDropdown, VendorsDropdown } from '@/Components/Dropdowns'
import { coerceArray } from '@/lib'

type TLicenseFormData = {
	license: Schema.LicensesFormData
}

export interface ILicenseFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TLicenseFormData>) => boolean|void
	license: Schema.LicensesFormData
}

const LicenseForm = ({ to, method = 'post', onSubmit, license }: ILicenseFormProps) => {
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

			<NumberInput name="qty" label="Seats" required />

			<TextInput name="licenser_name" label="Licenser Name" required />

			<TextInput name="licenser_email" label="Licenser Email" required />

			<Checkbox name="reassignable" label="Re-Assignable" />

			<CurrencyInput name="cost" label="Cost" />

			<DateTime name="purchased_at" label="Purchase Date" />

			<DateTime name="expires_at" label="Expiration Date" />

			<DateTime name="terminates_at" label="Termination Date" />

			<Checkbox name="maintained" label="Maintained" />

			<ManufacturersDropdown initialData={ coerceArray(license?.manufacturer) } />

			<VendorsDropdown initialData={ coerceArray(license?.vendor) } />

			<CategoriesDropdown
				categorizable_type="License"
				initialData={ coerceArray(license?.category) }
			/>

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ license.id ? 'Update' : 'Create' } License
			</Submit>
		</Form>
	)
}

export default React.memo(LicenseForm)
