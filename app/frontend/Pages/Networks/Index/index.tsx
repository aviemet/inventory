import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Routes, formatter } from '@/lib'
import { Link, Table } from '@/Components'
import { EditButton, CheckoutButton, CheckinButton } from '@/Components/Button'
import { NewIcon } from '@/Components/Icons'

interface INetworksIndexProps {
	networks: Schema.Network[]
	pagination: Schema.Pagination
}

const Index = ({ networks, pagination }: INetworksIndexProps) => {
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

					<Table.Title
						title={ title }
						menuOptions={ [
							{ label: 'New Network', href: Routes.newNetwork(), icon: NewIcon },
						] }
					/>

					<Table>
						<Table.Head>
							<Table.Row>
								<Table.Cell sort="name">Name</Table.Cell>
								<Table.Cell sort="address">Network</Table.Cell>
								<Table.Cell sort="gateway">Gateway</Table.Cell>
								<Table.Cell sort="dhcp_start">DHCP Start</Table.Cell>
								<Table.Cell sort="dhcp_end">DHCP End</Table.Cell>
								<Table.Cell sort="vland_id">VLAN Id</Table.Cell>
								<Table.Cell style={ { textAlign: 'right', paddingRight: '1rem' } }>Actions</Table.Cell>
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

									<Table.Cell className="table-column-fit">
										<EditButton href={ Routes.editNetwork(network) } />
									</Table.Cell>

								</Table.Row>
							) } />
						</Table.Body>
					</Table>

					<Table.Pagination />
				</Table.TableProvider>
			</Table.Section>
		</>
	)
}

export default Index
