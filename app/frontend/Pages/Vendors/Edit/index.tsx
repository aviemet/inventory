import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import VendorForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateVendorProps{
	vendor: Schema.Vendor
}

const New = ({ vendor, ...models }: IUpdateVendorProps) => {
	const title = `Edit ${vendor.name}`

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<VendorForm to={ Routes.vendors(vendor) } method="patch" vendor={ vendor } { ...models } />
			</section>
		</>
	)
}

export default New
