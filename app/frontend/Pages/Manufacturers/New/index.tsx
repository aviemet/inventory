import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import ManufacturerForm from '../Form'
import { Routes } from '@/lib'

interface INewManufacturerProps {
	manufacturer: Schema.Manufacturer
}

const New = ({ ...data }: INewManufacturerProps) => {
	const title = 'New Manufacturer'

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<ManufacturerForm to={ Routes.manufacturers() } { ...data } />
			</section>
		</>
	)
}

export default New
