import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import NetworkForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateNetworkProps{
	network: Schema.Network
}

const New = ({ network, ...models }: IUpdateNetworkProps) => {
	const title = `Edit ${network.name}`

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<h1>{ title } for { user.active_company!.name }</h1>

				<NetworkForm to={ Routes.network(network) } method="patch" network={ network } { ...models } />
			</Section>
		</>
	)
}

export default New
