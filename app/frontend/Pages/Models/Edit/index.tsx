import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import ModelForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateModelProps{
	model: Schema.Model
	categories: Schema.Category[]
	manufacturers: Schema.Manufacturer[]
}

const New = ({ model, ...models }: IUpdateModelProps) => {
	const title = `Edit ${model.name}`

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<ModelForm to={ Routes.models(model) } method="patch" model={ model } { ...models } />
			</section>
		</>
	)
}

export default New
