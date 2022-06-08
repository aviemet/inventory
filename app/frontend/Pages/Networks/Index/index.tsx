import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Option } from '@/Components/Popover'
import { EditButton } from '@/Components/Button'
import {
	TableSection,
	TableTitleSection,
} from '@/Components/Layout/IndexPageComponents'

interface INetworksIndexProps {
	networks: Schema.Network[]
	pagination: Schema.Pagination
}

const Index = ({ networks, pagination }: INetworksIndexProps) => {
	const title = 'Networks'

	return (
		<>
			<Head title={ title }></Head>

			<TableSection>
				<Table.TableProvider
					selectable
					hideable
					model="networks"
					rows={ networks }
					pagination={ pagination }
				>

					<TableTitleSection
						title={ title }
						popover={
							<Popover>
								<Option href={ Routes.newNetwork() }>
								Create New Network
								</Option>
							</Popover>
						}
					/>

					<Table.Table fixed={ false }>
						<Table.Head>
							<Table.Row>
								<Table.Cell sort="name">Name</Table.Cell>
								<Table.Cell sort="address">Network</Table.Cell>
								<Table.Cell sort="gateway">Gateway</Table.Cell>
								<Table.Cell sort="dhcp_start">DHCP Start</Table.Cell>
								<Table.Cell sort="dhcp_end">DHCP End</Table.Cell>
								<Table.Cell sort="vland_id">VLAN Id</Table.Cell>
								<Table.Cell className="text-right">Actions</Table.Cell>
							</Table.Row>
						</Table.Head>

						<Table.Body>
							<Table.RowIterator render={ network => (
								<Table.Row key={ network.id }>
									<Table.Cell nowrap>
										<Link href={ Routes.network(network) }>{ network.name }</Link>
									</Table.Cell>
									<Table.Cell>
										<Link href={ Routes.network(network) }>{ network.address }</Link>
									</Table.Cell>
									<Table.Cell>
										<Link href={ Routes.network(network) }>{ network.gateway }</Link>
									</Table.Cell>
									<Table.Cell>
										<Link href={ Routes.network(network) }>{ network.dhcp_start }</Link>
									</Table.Cell>
									<Table.Cell>
										<Link href={ Routes.network(network) }>{ network.dhcp_end }</Link>
									</Table.Cell>
									<Table.Cell>
										<Link href={ Routes.network(network) }>{ network.vland_id }</Link>
									</Table.Cell>
									<Table.Cell className="table-column-fit text-right">
										<EditButton href={ Routes.editNetwork(network) } />
									</Table.Cell>
								</Table.Row>
							) } />
						</Table.Body>
					</Table.Table>
					<Table.Pagination />
				</Table.TableProvider>
			</TableSection>
		</>
	)
}

export default Index
