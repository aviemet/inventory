import React from 'react'
import { Section, Page, Title } from '@/components'
import AccessoryForm from '../Form'
import { Routes } from '@/lib'

interface NewAccessoryProps {
	accessory: Schema.AccessoriesFormData
}

const NewAccessory = ({ accessory }: NewAccessoryProps) => {
	const title = 'New Accessory'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Accessories', href: Routes.accessories() },
			{ title: 'New Accessory', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<AccessoryForm to={ Routes.accessories() } accessory={ accessory } />
			</Section>
		</Page>
	)
}

export default NewAccessory
