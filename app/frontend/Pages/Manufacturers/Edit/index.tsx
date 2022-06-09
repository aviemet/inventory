import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import ManufacturerForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateManufacturerProps{
	manufacturer: Schema.Manufacturer
}

const New = ({ manufacturer, ...models }: IUpdateManufacturerProps) => {
	const title = `Edit ${manufacturer.name}`

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<ManufacturerForm to={ Routes.manufacturers(manufacturer) } method="patch" manufacturer={ manufacturer } { ...models } />
			</section>
		</>
	)
}

export default New
