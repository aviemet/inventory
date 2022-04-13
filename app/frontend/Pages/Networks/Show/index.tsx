import React from 'react'
import { Link } from '@/Components'
import { Routes, formatter } from '@/lib'
import { Popover, Divider, Option } from '@/Components/Popover'

interface INetworkDetails extends Schema.Network {
	hosts: string[]
	broadcast: string
}

interface IShowNetworkProps {
	network: INetworkDetails
	ips: Schema.IpLease[]
}

const Show = ({ network, ips }: IShowNetworkProps) => {
	console.log({ network, ips })

	return (
		<div className="container">
			<section>
				<h1 className="inline-block">{ network.name }</h1>

				<div className="float-right inline-block">
					<Popover>
						<Option>
							<Link href={ Routes.editNetwork(network) }>Edit Network</Link>
						</Option>
					</Popover>
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
			</section>
		</div>
	)
}

export default Show