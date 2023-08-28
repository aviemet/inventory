import React from 'react'
import { Heading, Page, Section } from '@/Components'
import LicenseForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateLicenseProps{
	license: Schema.LicensesEdit
}

const New = ({ license }: IUpdateLicenseProps) => {
	const title = `Edit ${license.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Licenses', href: Routes.licenses() },
			{ title: license.name!, href: Routes.license(license) },
			{ title: 'Edit Licenses' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<LicenseForm to={ Routes.license(license) } method="patch" license={ license } />
			</Section>
		</Page>
	)
}

export default New
