import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Features'
import { NewIcon } from '@/Components/Icons'
import NetworksTable from '../Table'

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
				{ label: 'New Network', href: Routes.newNetwork(), icon: NewIcon },
			] }
		>
			<NetworksTable />
		</IndexPageTemplate>
	)
}

export default NetworksIndex
