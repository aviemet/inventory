import React from 'react'
import {
	Form,
	TextInput,
	Textarea,
	DateInput,
	Checkbox,
	Submit,
	CurrencyInput,
	NumberInput,
} from '@/Components/Form'
import { CategoriesDropdown, ManufacturersDropdown, VendorsDropdown } from '@/Features/Dropdowns'
import { Box, Grid } from '@/Components'
import { coerceArray } from '@/lib'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type LicenseFormData = {
	license: Schema.LicensesFormData
}

export interface LicenseFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<LicenseFormData>) => boolean|void
	license: Schema.LicensesFormData
}

const LicenseForm = ({ to, method = 'post', onSubmit, license }: LicenseFormProps) => {
	return (
		<Form
			model="license"
			data={ { license } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="name" label="Name" required autoFocus />
				</Grid.Col>

				<Grid.Col >
					<TextInput name="key" label="License Key" required />
				</Grid.Col>

				<Grid.Col span={ { base: 12, md: 6 } }>
					<NumberInput name="qty" label="Seats" required />
				</Grid.Col>

				<Grid.Col span={ { base: 12, sm: 6, lg: 6 } }>
					<Checkbox name="reassignable" label="Re-Assignable" />
				</Grid.Col>

				<Grid.Col>
					<TextInput name="licenser_name" label="Licenser Name" required />
				</Grid.Col>

				<Grid.Col>
					<TextInput name="licenser_email" label="Licenser Email" required />
				</Grid.Col>


				<Grid.Col span={ { base: 12, md: 6 } }>
					<CurrencyInput name="cost" label="Cost" />
				</Grid.Col>
				<Box style={ { width: '100%' } }></Box>

				<Grid.Col span={ { base: 12, md: 6 } }>
					<DateInput name="purchased_at" label="Purchase Date" />
				</Grid.Col>
				<Box style={ { width: '100%' } }></Box>

				<Grid.Col span={ { base: 12, md: 6 } }>
					<DateInput name="expires_at" label="Expiration Date" />
				</Grid.Col>

				<Box style={ { width: '100%' } }></Box>
				<Grid.Col span={ { base: 12, md: 6 } }>
					<DateInput name="terminates_at" label="Termination Date" />
				</Grid.Col>
				<Box style={ { width: '100%' } }></Box>

				<Grid.Col span={ { base: 12, md: 6 } }>
					<Checkbox name="maintained" label="Maintained" />
				</Grid.Col>

				<Grid.Col>
					<ManufacturersDropdown initialData={ coerceArray(license?.manufacturer) } />
				</Grid.Col>

				<Grid.Col>
					<VendorsDropdown initialData={ coerceArray(license?.vendor) } />
				</Grid.Col>

				<Grid.Col>
					<CategoriesDropdown
						categorizable_type="License"
						initialData={ coerceArray(license?.category) }
					/>
				</Grid.Col>

				<Grid.Col>
					<Textarea name="notes" label="Notes" />
				</Grid.Col>

				<Grid.Col>
					<Submit>
						{ license.id ? 'Update' : 'Create' } License
					</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default LicenseForm
