import React from 'react'
import { Section, Page, Heading } from '@/Components'
import AccessoryForm from '../Form'
import { Routes } from '@/lib'

interface INewAccessoryProps {
	accessory: Schema.AccessoriesFormData
}

const NewAccessory = ({ accessory }: INewAccessoryProps) => {
	const title = 'New Accessory'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Accessories', href: Routes.accessories() },
			{ title: 'New Accessory' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<AccessoryForm to={ Routes.accessories() } accessory={ accessory } />
			</Section>
		</Page>
	)
}

export default NewAccessory
