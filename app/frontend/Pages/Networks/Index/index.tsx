import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes } from '@/lib'
import { Table } from '@/Components'
import { TableTitleSection } from '@/Layouts/Components'
import { NewIcon } from '@/Components/Icons'
import NetworksTable from '../Table'

interface INetworksIndexProps {
	networks: Schema.Network[]
	pagination: Schema.Pagination
}

const NetworksIndex = ({ networks, pagination }: INetworksIndexProps) => {
	const title = 'Networks'

	return (
		<>
			<Head title={ title }></Head>

			<Table.Section>
				<Table.TableProvider
					selectable
					hideable
					model="networks"
					rows={ networks }
					pagination={ pagination }
				>

					<TableTitleSection title={ title } menuOptions={ [
						{ label: 'New Network', href: Routes.newNetwork(), icon: NewIcon },
					] }>
						<Table.SearchInput />
						<Table.ColumnPicker />
					</TableTitleSection>

					<NetworksTable />

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</>
	)
}

export default NetworksIndex
