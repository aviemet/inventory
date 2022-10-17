import React from 'react'
import { Section, Page, Heading } from '@/Components'
import AccessoryForm from '../Form'
import { Routes } from '@/lib'

interface INewAccessoryProps {
	accessory: Schema.Accessory
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
	manufacturers: Schema.Manufacturer[]
	categories: Schema.Category[]
}

const NewAccessory = ({ ...data }: INewAccessoryProps) => {
	const title = 'New Accessory'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Accessories', href: Routes.accessories() },
			{ title: 'New Accessory' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<AccessoryForm to={ Routes.accessories() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewAccessory
