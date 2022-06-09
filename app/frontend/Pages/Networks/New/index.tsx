import React from 'react'
import { Head, usePage } from '@inertiajs/inertia-react'
import NetworkForm from '../Form'
import { Routes } from '@/lib'

interface INewNetworkProps {
	network: Schema.Network
}

const New = ({ ...data }: INewNetworkProps) => {
	const title = 'New Network'

	const { props: { auth: { user } } } = usePage<InertiaPage>()

	return (
		<>
			<Head title={ title }></Head>

			<section className="container">
				<h1>{ title } for { user.active_company!.name }</h1>

				<NetworkForm to={ Routes.networks() } { ...data } />
			</section>
		</>
	)
}

export default New
