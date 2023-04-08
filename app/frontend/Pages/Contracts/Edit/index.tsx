import React from 'react'
import { Heading, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import ContractForm from '../Form'

interface IUpdateContractProps{
	contract: Schema.ContractsEdit
	vendors: Schema.VendorsOptions[]
	categories: Schema.CategoriesOptions[]
}

const EditContract = ({ contract, ...models }: IUpdateContractProps) => {
	const title = `Edit ${contract.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Contracts', href: Routes.contracts() },
			{ title: contract.name!, href: Routes.contract(contract) },
			{ title: 'Edit Contract' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ContractForm
					to={ Routes.contract(contract) }
					method="patch"
					contract={ contract }
					{ ...models }
				/>
			</Section>
		</Page>
	)
}

export default EditContract
