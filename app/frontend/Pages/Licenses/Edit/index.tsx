import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import LicenseForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateLicenseProps{
	license: Schema.License
	categories: Schema.Category[]
	vendors: Schema.Vendor[]
	manufacturers: Schema.Manufacturer[]
}

const New = ({ license, ...models }: IUpdateLicenseProps) => {
	const title = `Edit ${license.name}`

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title } for { user.active_company!.name }</h1>

				<LicenseForm to={ Routes.license(license) } method="patch" license={ license } { ...models } />
			</Section>
		</>
	)
}

export default New
