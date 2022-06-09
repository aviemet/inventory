import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import VendorForm from '../Form'
import { Routes } from '@/lib'

interface INewVendorProps {
	vendor: Schema.Vendor
}

const New = ({ ...data }: INewVendorProps) => {
	const title = 'New Vendor'

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<VendorForm to={ Routes.vendors() } { ...data } />
			</section>
		</>
	)
}

export default New
