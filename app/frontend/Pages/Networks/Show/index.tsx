import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Link, Section } from '@/Components'
import { Routes, formatter } from '@/lib'
import { Popover, Divider, Option } from '@/Components/Popover'
import NetworkDetailsTable from './NetworkDetailsTable'
import tw from 'twin.macro'

interface INetworkDetails extends Schema.Network {
	hosts: string[]
	broadcast: string
}

interface IShowNetworkProps {
	network: INetworkDetails
	ips: Schema.IpLease[]
}

const Show = ({ network, ips }: IShowNetworkProps) => {
	const title = network.name || 'Show Network'
	const tableRows = 3

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<div tw="flex mb-2">
					<h1 tw="flex-1">{ title }</h1>

					<div tw="w-10 p-1">
						<Popover>
							<Option href={ Routes.editNetwork(network) }>
								{ title }
							</Option>
						</Popover>
					</div>
				</div>

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
				<h2>Addresses</h2>

				<div className="flex flex-wrap items-start">
					{ Array(tableRows).fill('').map((_, i) => {
						const start = Math.ceil(network.hosts.length / tableRows * i)
						const end = Math.ceil((network.hosts.length / tableRows) * (i + 1))
						return (
							<NetworkDetailsTable
								key={ i }
								n={ i }
								hosts={ network.hosts.slice(start, end) }
								ips={ ips }
							/>
						)
					}) }
				</div>
			</Section>
		</>
	)
}

export default Show
