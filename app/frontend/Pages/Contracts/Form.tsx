import React from 'react'
import { Group } from '@/Components'
import {
	Form,
	TextInput,
	Textarea,
	Date,
	Submit,
} from '@/Components/Form'
import { CategoriesDropdown, VendorsDropdown } from '@/Components/Dropdowns'
import { type UseFormProps } from 'use-inertia-form'
import { coerceArray } from '@/lib'

type TContractFormData = {
	contract: Schema.ContractsFormData
}

export interface IContractFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TContractFormData>) => boolean|void
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
}: IContractFormProps) => {
	return (
		<Form
			model="contract"
			data={ { contract } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<TextInput name="number" label="Number" required />

			<Group grow>
				<Date name="begins_at" label="Contract Start" />

				<Date name="ends_at" label="Contract End" />
			</Group>

			<VendorsDropdown initialData={ coerceArray(contract?.vendor) } />

			<CategoriesDropdown
				categorizable_type="Contract"
				initialData={ coerceArray(contract?.category) }
			/>

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ contract.id ? 'Update' : 'Create' } Contract
			</Submit>
		</Form>
	)
}

export default React.memo(ContractForm)
