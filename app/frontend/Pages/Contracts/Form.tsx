import React from 'react'
import {
	Form,
	TextInput,
	Textarea,
	DateTime,
	Submit,
} from '@/Components/Form'
import { CategoriesDropdown, VendorsDropdown } from '@/Components/Dropdowns'
import { type UseFormProps } from 'use-inertia-form'

type TContractFormData = {
	contract: Schema.ContractsFormData
}

export interface IContractFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<TContractFormData>) => boolean|void
	contract?: Schema.ContractsFormData
	vendors: Schema.VendorsOptions[]
	categories: Schema.CategoriesOptions[]
}

const emptyContract: Schema.ContractsFormData = {
	name: '',
	category_id: '',
	vendor_id: '',
}

const ContractForm = ({
	to,
	method = 'post',
	onSubmit,
	contract = emptyContract,
	vendors,
	categories,
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

			<DateTime name="begins_at" label="Contract Start" />

			<DateTime name="ends_at" label="Contract End" />

			<VendorsDropdown vendors={ vendors } />

			<CategoriesDropdown categories={ categories } />

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ contract.id ? 'Update' : 'Create' } Contract
			</Submit>
		</Form>
	)
}

export default React.memo(ContractForm)
