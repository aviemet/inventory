import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ContractForm from '../Form'
import { Routes } from '@/lib'

interface NewContractProps {
	contract: Schema.ContractsFormData
}

const NewContract = ({ contract }: NewContractProps) => {
	const title = 'New Contract'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Contracts', href: Routes.contracts() },
			{ title: 'New Contract', href: window.location.href },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ContractForm to={ Routes.contracts() } contract={ contract } />
			</Section>
		</Page>
	)
}

export default NewContract
