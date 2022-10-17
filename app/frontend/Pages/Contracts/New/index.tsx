import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ContractForm from '../Form'
import { Routes } from '@/lib'

interface INewContractProps {
	contract: Schema.Contract
	vendors: Schema.Vendor[]
	categories: Schema.Category[]
}

const NewContract = ({ ...data }: INewContractProps) => {
	const title = 'New Contract'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Contracts', href: Routes.contracts() },
			{ title: 'New Contract' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ContractForm to={ Routes.contracts() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewContract
