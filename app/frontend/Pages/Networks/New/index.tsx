import React from 'react'
import { Heading, Page, Section } from '@/Components'
import NetworkForm from '../Form'
import { Routes } from '@/lib'

interface INewNetworkProps {
	network: Schema.NetworksFormData
}

const New = ({ ...data }: INewNetworkProps) => {
	const title = 'New Network'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Networks', href: Routes.networks() },
			{ title: 'New Network' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<NetworkForm to={ Routes.networks() } { ...data } />
			</Section>
		</Page>
	)
}

export default New
