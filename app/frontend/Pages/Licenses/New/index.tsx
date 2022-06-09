import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import LicenseForm from '../Form'
import { Routes } from '@/lib'

interface INewLicenseProps {
	license: Schema.License
	categories: Schema.Category[]
	vendors: Schema.Vendor[]
	manufacturers: Schema.Manufacturer[]
}

const New = ({ ...data }: INewLicenseProps) => {
	const title = 'New License'

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<LicenseForm to={ Routes.licenses() } { ...data } />
			</section>
		</>
	)
}

export default New
