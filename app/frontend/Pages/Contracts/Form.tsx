import React from 'react'
import { Grid } from '@/Components'
import {
	Form,
	TextInput,
	Textarea,
	DateInput,
	Submit,
} from '@/Components/Form'
import { FormCategoriesDropdown, FormVendorsDropdown } from '@/Features/Dropdowns'
import { coerceArray } from '@/lib'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type ContractFormData = {
	contract: Schema.ContractsFormData
}

export interface ContractFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<ContractFormData>) => boolean | void
	contract?: Schema.ContractsFormData
}

const emptyContract: Schema.ContractsFormData = {
	name: '',
	category_id: NaN,
	vendor_id: NaN,
}

const ContractForm = ({
	to,
	method = 'post',
	onSubmit,
	contract = emptyContract,
}: ContractFormProps) => {
	return (
		<Form
			model="contract"
			data={ { contract } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Grid>
				<Grid.Col>
					<TextInput name="name" label="Name" required />
				</Grid.Col>

				<Grid.Col>
					<TextInput name="number" label="Contract Number" />
				</Grid.Col>

				<Grid.Col span={ { sm: 12, md: 6 } }>
					<DateInput name="begins_at" label="Contract Start" />
				</Grid.Col>

				<Grid.Col span={ { sm: 12, md: 6 } }>
					<DateInput name="ends_at" label="Contract End" />
				</Grid.Col>

				<Grid.Col>
					<FormVendorsDropdown initialData={ coerceArray(contract?.vendor) } required />
				</Grid.Col>

				<Grid.Col>
					<FormCategoriesDropdown
						categorizable_type="Contract"
						initialData={ coerceArray(contract?.category) }
						required
					/>
				</Grid.Col>

				<Grid.Col>
					<Textarea name="notes" label="Notes" />
				</Grid.Col>

				<Grid.Col>
					<Submit>
						{ contract.id ? 'Update' : 'Create' } Contract
					</Submit>
				</Grid.Col>
			</Grid>
		</Form>
	)
}

export default ContractForm
