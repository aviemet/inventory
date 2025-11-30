
import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import NetworkForm from "@/domains/Networks/Form"

interface UpdateNetworkProps {
	network: Schema.NetworksEdit
}

const New = ({ network }: UpdateNetworkProps) => {
	const title = `Edit ${network.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Networks", href: Routes.networks() },
			{ title: network.name, href: Routes.network(network) },
			{ title: "Edit Network", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<NetworkForm to={ Routes.network(network) } method="patch" network={ network } />
			</Section>
		</Page>
	)
}

export default New
