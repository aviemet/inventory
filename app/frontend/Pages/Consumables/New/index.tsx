import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ConsumableForm from '../Form'
import { Routes } from '@/lib'

interface NewConsumableProps {
	consumable: Schema.ConsumablesFormData
}

const NewConsumable = ({ consumable }: NewConsumableProps) => {
	const title = 'New Consumable'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Consumables', href: Routes.consumables() },
			{ title: 'New Consumable' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ConsumableForm to={ Routes.consumables() } consumable={ consumable } />
			</Section>
		</Page>
	)
}

export default NewConsumable
