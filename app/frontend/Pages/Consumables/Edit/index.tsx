import React from 'react'
import { Heading, Page, Section } from '@/Components'
import ConsumableForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateConsumableProps{
	consumable: Schema.ConsumablesEdit
}

const EditConsumable = ({ consumable }: IUpdateConsumableProps) => {
	const title = `Edit ${consumable.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Consumables', href: Routes.consumables() },
			{ title: consumable.name!, href: Routes.consumable(consumable) },
			{ title: 'Edit Consumable' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<ConsumableForm
					to={ Routes.consumable(consumable) }
					method="patch"
					consumable={ consumable }
				/>
			</Section>
		</Page>
	)
}

export default EditConsumable
