import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Divider, Option } from '@/Components/Popover'
import { EditButton } from '@/Components/Button'

interface INetworksIndexProps {
	networks: Schema.Network[]
	pagination: Schema.Pagination
}

const Index = ({ networks, pagination }: INetworksIndexProps) => {
	const title = 'Networks'

	return (
		<>
			<Head title={ title }></Head>

			<section className="flex flex-col h-full">
				<Table.TableProvider selectable rows={ networks } pagination={ pagination }>
					<div className="networks-center flex justify-between">
						<h1 className="md:align-middle inline-block align-text-top">{ title }</h1>
						<div>
							<Table.SearchInput model="networks" />

							<Popover>
								<Option>
									<Link href={ Routes.newNetwork() } key="new_asset">Create New Network</Link>
								</Option>
							</Popover>

						</div>
					</div>

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
			</section>
		</>
	)
}

export default Index
