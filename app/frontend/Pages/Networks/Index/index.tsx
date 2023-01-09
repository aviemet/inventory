import React from 'react'
import { Routes } from '@/lib'
import { IndexPageTemplate } from '@/Layouts/AppLayout/Components'
import { NewIcon } from '@/Components/Icons'
import NetworksTable from '../Table'

interface INetworksIndexProps {
	networks: Schema.Network[]
	pagination: Schema.Pagination
}

const NetworksIndex = ({ networks, pagination }: INetworksIndexProps) => {
	return (
		<IndexPageTemplate
			title="Networks"
			model="networks"
			rows={ networks }
			pagination={ pagination }
			menuOptions={ [
				{ label: 'New Network', href: Routes.newNetwork(), icon: NewIcon },
			] }
		>
			<NetworksTable />
		</IndexPageTemplate>
	)
}

export default NetworksIndex
