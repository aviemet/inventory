import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import ConsumableForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateConsumableProps{
	contract: Schema.Contract
	vendors: Schema.Vendor[]
	categories: Schema.Category[]
}

const EditConsumable = ({ contract, ...models }: IUpdateConsumableProps) => {
	const title = `Edit ${contract.name}`

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title } for { user.active_company!.name }</h1>

				<ConsumableForm to={ Routes.contract(contract) } method="patch" contract={ contract } { ...models } />
			</Section>
		</>
	)
}

export default EditConsumable
