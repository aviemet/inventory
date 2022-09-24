import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section, Menu, Flex, Heading } from '@/Components'
import { Routes } from '@/lib'
import NetworkDetailsTable from './NetworkDetailsTable'
import { EditIcon } from '@/Components/Icons'

interface INetworkDetails extends Schema.Network {
	hosts: string[]
	broadcast: string
}

interface IShowNetworkProps {
	network: INetworkDetails
	ips: Schema.IpLease[]
	pagination: Schema.Pagination
}

const Show = ({ network, ips, pagination }: IShowNetworkProps) => {
	const title = network.name || 'Show Network'

	console.log({ network, ips, pagination })

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<Flex position="apart">
					<Heading sx={ { flex: 1 } }>{ title }</Heading>

					<Menu>
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Item href={ Routes.editNetwork(network) } icon={ <EditIcon /> }>
							Edit
							</Menu.Item>
						</Menu.Dropdown>
					</Menu>
				</Flex>

				<div className="item-details">
					<div className="item-row">
						<label>Network</label>
						<div className="value">{ network.address }</div>
					</div>

					<div className="item-row">
						<label>Number of Hosts</label>
						<div className="value">{ network.hosts.length }</div>
					</div>

					<div className="item-row">
						<label>Network Address</label>
						<div className="value">{ network.address!.split('/')[0] }</div>
					</div>

					<div className="item-row">
						<label>VLAN ID</label>
						<div className="value">{ network.vlan_id }</div>
					</div>

					<div className="item-row">
						<label>Gateway</label>
						<div className="value">{ network.gateway }</div>
					</div>

					<div className="item-row">
						<label>DHCP Start</label>
						<div className="value">{ network.dhcp_start }</div>
					</div>

					<div className="item-row">
						<label>Broadcast Address</label>
						<div className="value">{ network.broadcast }</div>
					</div>

					<div className="item-row">
						<label>DHCP End</label>
						<div className="value">{ network.dhcp_end }</div>
					</div>
				</div>
			</Section>

			<br />

			<Section>
				<Heading order={ 2 }>Addresses</Heading>

				<NetworkDetailsTable
					hosts={ network.hosts }
					ips={ ips }
					pagination={ pagination }
				/>
			</Section>
		</>
	)
}

export default Show
