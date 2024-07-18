import React from 'react'
import { Title, Page, Section } from '@/Components'
import ConsumableForm from '../Form'
import { Routes } from '@/lib'

interface UpdateConsumableProps{
	consumable: Schema.ConsumablesEdit
}

const EditConsumable = ({ consumable }: UpdateConsumableProps) => {
	const title = `Edit ${consumable.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Consumables', href: Routes.consumables() },
			{ title: consumable.name, href: Routes.consumable(consumable) },
			{ title: 'Edit Consumable', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

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
