import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ConsumableForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateConsumableProps{
	contract: Schema.Contract
	vendors: Schema.Vendor[]
	categories: Schema.Category[]
}

const EditConsumable = ({ contract, ...models }: IUpdateConsumableProps) => {
	const title = `Edit ${contract.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Contracts', href: Routes.contracts() },
			{ title: contract.name!, href: Routes.contract(contract) },
			{ title: 'Edit Contract' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ConsumableForm to={ Routes.contract(contract) } method="patch" contract={ contract } { ...models } />
			</Section>
		</Page>
	)
}

export default EditConsumable
