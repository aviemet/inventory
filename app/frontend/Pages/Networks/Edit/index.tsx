import React from 'react'
import { Heading, Page, Section } from '@/Components'
import NetworkForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateNetworkProps{
	network: Schema.Network
}

const New = ({ network, ...models }: IUpdateNetworkProps) => {
	const title = `Edit ${network.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Networks', href: Routes.networks() },
			{ title: network.name!, href: Routes.network(network) },
			{ title: 'Edit Network' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<NetworkForm to={ Routes.network(network) } method="patch" network={ network } { ...models } />
			</Section>
		</Page>
	)
}

export default New
