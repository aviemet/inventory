import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import * as Table from '@/Components/Table'
import { Popover, Divider, Option } from '@/Components/Popover'
import { MdEdit } from 'react-icons/md'

interface INetworksIndexProps {
	networks: Schema.Network[]
	pagination: Schema.Pagination
}

const Index = ({ networks, pagination }: INetworksIndexProps) => {
	const title = 'Networks'

	return (
		<>
			<Head title={ title }></Head>

			<section className="h-full flex flex-col">
				<Table.TableProvider selectable rows={ networks } pagination={ pagination }>
					<div className="flex justify-between networks-center">
						<h1 className="inline-block align-text-top md:align-middle">{ title }</h1>
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
										<Link as="button" href={ Routes.editNetwork(network) }><MdEdit /></Link>
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
