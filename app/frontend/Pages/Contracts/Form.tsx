import React from 'react'
import {
	Form,
	TextInput,
	Textarea,
	SearchableDropdown,
	DateTime,
	Submit,
} from '@/Components/Form'
import { router } from '@inertiajs/react'
import { CategoriesDropdown } from '@/Components/Form/Dropdowns'
import { type UseFormProps } from 'use-inertia-form'

export interface IContractFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps) => boolean|void
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
			<TextInput name="name" label="Name" required autoFocus />

			<TextInput name="number" label="Number" required />

			<DateTime name="begins_at" label="Contract Start" />

			<DateTime name="ends_at" label="Contract End" />

			<SearchableDropdown
				label="Vendor"
				name="vendor_id"
				options={ vendors }
				filterMatchKeys={ ['name'] }
				onOpen={ () => router.reload({ only: ['vendors'] }) }
			/>

			<CategoriesDropdown
				categories={ categories }
			/>

			{ /* <SearchableDropdown
				label="Category"
				name="category_id"
				options={ categories }
				filterMatchKeys={ ['name'] }
				onOpen={ () => Inertia.reload({ only: ['categories'] }) }
			/> */ }

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ contract.id ? 'Update' : 'Create' } Contract
			</Submit>
		</Form>
	)
}

export default React.memo(ContractForm)
