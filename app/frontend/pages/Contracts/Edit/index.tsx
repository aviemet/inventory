import React from 'react'
import { Title, Page, Section } from '@/components'
import { Routes } from '@/lib'
import ContractForm from '../Form'

interface UpdateContractProps{
	contract: Schema.ContractsEdit
}

const EditContract = ({ contract }: UpdateContractProps) => {
	const title = `Edit ${contract.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Contracts', href: Routes.contracts() },
			{ title: contract.name!, href: Routes.contract(contract) },
			{ title: 'Edit Contract', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<ContractForm
					to={ Routes.contract(contract) }
					method="patch"
					contract={ contract }
				/>
			</Section>
		</Page>
	)
}

export default EditContract
