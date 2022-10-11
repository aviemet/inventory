import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Breadcrumbs, Section } from '@/Components'
import ComponentForm from '../Form'
import { Routes } from '@/lib'
import { breadcrumbs } from '../utils'

interface IUpdateComponentProps{
	component: Schema.Component
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
	manufacturers: Schema.Manufacturer[]
	categories: Schema.Category[]
}

const EditComponent = ({ component, ...models }: IUpdateComponentProps) => {
	const title = `Edit ${component.name}`

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<Breadcrumbs>{ breadcrumbs.edit(component) }</Breadcrumbs>

			<Section>
				<h1>{ title } for { user.active_company!.name }</h1>

				<ComponentForm to={ Routes.component(component) } method="patch" component={ component } { ...models } />
			</Section>
		</>
	)
}

export default EditComponent
