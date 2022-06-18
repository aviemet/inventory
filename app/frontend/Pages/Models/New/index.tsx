import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import ModelForm from '../Form'
import { Routes } from '@/lib'

interface INewModelProps {
	model: Schema.Model
	categories: Schema.Category[]
	manufacturers: Schema.Manufacturer[]
}

const New = ({ ...data }: INewModelProps) => {
	const title = 'New Model'

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title } for { user.active_company!.name }</h1>

				<ModelForm to={ Routes.models() } { ...data } />
			</Section>
		</>
	)
}

export default New
