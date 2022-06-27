import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
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

			<Section>
				<h1>{ title } for { user.active_company!.name }</h1>

				<ManufacturerForm to={ Routes.manufacturers(manufacturer) } method="patch" manufacturer={ manufacturer } { ...models } />
			</Section>
		</>
	)
}

export default New
