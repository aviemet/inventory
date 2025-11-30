import React from "react"

import { NewIcon } from "@/components/Icons"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import NetworksTable from "../Table"

interface NetworksIndexProps {
	networks: Schema.NetworksIndex[]
	pagination: Schema.Pagination
}

const NetworksIndex = ({ networks, pagination }: NetworksIndexProps) => {
	return (
		<IndexPageTemplate
			title="Networks"
			model="networks"
			rows={ networks }
			pagination={ pagination }
			deleteRoute={ Routes.networks() }
			menuOptions={ [
				{ label: "New Network", href: Routes.newNetwork(), icon: <NewIcon /> },
			] }
		>
			<NetworksTable />
		</IndexPageTemplate>
	)
}

export default NetworksIndex
