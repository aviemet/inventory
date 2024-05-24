import React from 'react'
import { Group } from '@/Components'
import {
	Form,
	TextInput,
	Textarea,
	DateInput,
	Submit,
} from '@/Components/Form'
import { FormCategoriesDropdown, VendorsDropdown } from '@/Features/Dropdowns'
import { coerceArray } from '@/lib'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type ContractFormData = {
	contract: Schema.ContractsFormData
}

export interface ContractFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<ContractFormData>) => boolean|void
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
			<TextInput name="name" label="Name" required autoFocus />

			<TextInput name="number" label="Contract Number" />

			<Group grow>
				<DateInput name="begins_at" label="Contract Start" />

				<DateInput name="ends_at" label="Contract End" />
			</Group>

			<VendorsDropdown initialData={ coerceArray(contract?.vendor) } required />

			<FormCategoriesDropdown
				categorizable_type="Contract"
				initialData={ coerceArray(contract?.category) }
				required
			/>

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ contract.id ? 'Update' : 'Create' } Contract
			</Submit>
		</Form>
	)
}

export default ContractForm
