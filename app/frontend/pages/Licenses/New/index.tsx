import React from 'react'
import { Title, Page, Section } from '@/components'
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
				<Title>{ title }</Title>

				<LicenseForm to={ Routes.licenses() } license={ license } />
			</Section>

		</Page>
	)
}

export default New
