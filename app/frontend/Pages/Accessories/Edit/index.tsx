import React from 'react'
import { Title, Page, Section } from '@/Components'
import AccessoryForm from '../Form'
import { Routes } from '@/lib'

interface EditAccessoryProps{
	accessory: Schema.AccessoriesEdit
}

const EditAccessory = ({ accessory }: EditAccessoryProps) => {
	const title = `Edit ${accessory.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Accessories', href: Routes.accessories() },
			{ title: accessory.name!, href: Routes.accessory(accessory) },
			{ title: 'Edit Accessory', href: window.location.href },
		] }>

			<Section>
				<Title>{ title }</Title>

				<AccessoryForm
					to={ Routes.accessory(accessory) }
					method="patch"
					accessory={ accessory }
				/>
			</Section>
		</Page>
	)
}

export default EditAccessory
