import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
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

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<NetworkForm to={ Routes.networks(network) } method="patch" network={ network } { ...models } />
			</section>
		</>
	)
}

export default New
