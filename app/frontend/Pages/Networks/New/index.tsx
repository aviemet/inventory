import React from 'react'
import { Title, Page, Section } from '@/Components'
import NetworkForm from '../Form'
import { Routes } from '@/lib'

interface NewNetworkProps {
	network: Schema.NetworksFormData
}

const New = ({ network }: NewNetworkProps) => {
	const title = 'New Network'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Networks', href: Routes.networks() },
			{ title: 'New Network', href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<NetworkForm to={ Routes.networks() } network={ network } />
			</Section>
		</Page>
	)
}

export default New
