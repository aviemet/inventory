import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ConsumableForm from '../Form'
import { Routes } from '@/lib'

interface INewConsumableProps {
	consumable: Schema.ConsumablesFormData
	models: Schema.ModelsOptions[]
	vendors: Schema.VendorsOptions[]
	locations: Schema.LocationsOptions[]
	manufacturers: Schema.ManufacturersOptions[]
	categories: Schema.CategoriesOptions[]
}

const NewConsumable = ({ ...data }: INewConsumableProps) => {
	const title = 'New Consumable'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Consumables', href: Routes.consumables() },
			{ title: 'New Consumable' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ConsumableForm to={ Routes.consumables() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewConsumable
