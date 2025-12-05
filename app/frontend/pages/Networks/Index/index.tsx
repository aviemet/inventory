import { NewIcon } from "@/components/Icons"
import NetworksTable from "@/domains/Networks/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


interface NetworksIndexProps {
	networks: Schema.NetworksIndex[]
	pagination: Schema.Pagination
}

const NetworksIndex = ({ networks, pagination }: NetworksIndexProps) => {
	return (
		<IndexPageTemplate
			title="Networks"
			model="networks"
			pagination={ pagination }
			deleteRoute={ Routes.networks() }
			menuOptions={ [
				{ label: "New Network", href: Routes.newNetwork(), icon: <NewIcon /> },
			] }
		>
			<NetworksTable records={ networks } pagination={ pagination } model="networks" />
		</IndexPageTemplate>
	)
}

export default NetworksIndex
