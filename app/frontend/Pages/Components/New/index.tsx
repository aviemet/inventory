import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import ComponentForm from '../Form'
import { Routes } from '@/lib'

interface INewComponentProps {
	component: Schema.Component
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
}

const NewComponent = ({ ...data }: INewComponentProps) => {
	const title = 'New Component'

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<ComponentForm to={ Routes.components() } { ...data } />
			</section>
		</>
	)
}

export default NewComponent
