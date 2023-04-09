import React from 'react'
import { Heading, Page, Section } from '@/Components'
import LicenseForm from '../Form'
import { Routes } from '@/lib'

interface INewLicenseProps {
	license: Schema.LicensesFormData
	categories: Schema.CategoriesOptions[]
	vendors: Schema.VendorsOptions[]
	manufacturers: Schema.ManufacturersOptions[]
}

const New = ({ ...data }: INewLicenseProps) => {
	const title = 'New License'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Licenses', href: Routes.licenses() },
			{ title: 'New License' },
		] }>

			<Section>
				<Heading>{ title }</Heading>

				<LicenseForm to={ Routes.licenses() } { ...data } />
			</Section>

		</Page>
	)
}

export default New
