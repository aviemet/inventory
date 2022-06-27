import React from 'react'
import {
	Form,
	Input,
	Textarea,
	SearchableDropdown,
	DateTime,
	Submit,
} from '@/Components/Form'
import { Inertia } from '@inertiajs/inertia'

export interface IContractFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	contract: Schema.Contract
	vendors: Schema.Vendor[]
	categories: Schema.Category[]
}

const ContractForm = ({ to, method = 'post', onSubmit, contract, vendors, categories }: IContractFormProps) => {
	return (
		<Form
			model="contract"
			data={ { contract } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<Input name="name" label="Name" required autoFocus />

			<Input name="number" label="Number" required />

			<DateTime name="begins_at" label="Contract Start" />

			<DateTime name="ends_at" label="Contract End" />

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
				{ contract.id ? 'Update' : 'Create' } Contract
			</Submit>
		</Form>
	)
}

export default React.memo(ContractForm)
