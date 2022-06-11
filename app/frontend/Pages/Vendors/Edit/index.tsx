import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import VendorForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateVendorProps{
	vendor: Schema.Vendor
}

const New = ({ vendor, ...models }: IUpdateVendorProps) => {
	const title = `Edit ${vendor.name}`

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title }</h1>

				<VendorForm to={ Routes.vendor(vendor.slug) } method="patch" vendor={ vendor } { ...models } />
			</section>
		</>
	)
}

export default New
