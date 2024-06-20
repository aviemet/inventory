import React from 'react'
import { Heading, Page, Section } from '@/Components'
import LicenseForm from '../Form'
import { Routes } from '@/lib'

interface NewLicenseProps {
	license: Schema.LicensesFormData
}

const New = ({ license }: NewLicenseProps) => {
	const title = 'New License'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Licenses', href: Routes.licenses() },
			{ title: 'New License', href: window.location.href },
		] }>

			<Section>
				<Heading>{ title }</Heading>

				<LicenseForm to={ Routes.licenses() } license={ license } />
			</Section>

		</Page>
	)
}

export default New
