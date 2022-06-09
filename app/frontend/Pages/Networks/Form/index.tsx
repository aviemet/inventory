import React from 'react'
import {
	Form,
	Input,
	Textarea,
	Submit,
} from '@/Components/Form'

export interface INetworkFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	network: Schema.Network
}

const NetworkForm = ({ to, method = 'post', onSubmit, network }: INetworkFormProps) => {
	return (
		<Form
			model="network"
			data={ { network } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
			className="max-w-5xl"
		>
			<Input name="name" label="Name" required autoFocus />

			<Input name="vlan_id" label="VLAN ID" />

			<Input name="address" label="Network Addres" placeholder="e.g. 192.168.1.0/24" required />

			<Input name="gateway" label="Gateway Addres" placeholder="e.g. 192.168.1.1" />

			<Input name="dhcp_start" label="DHCP Start" placeholder="e.g. 192.168.1.100" />

			<Input name="dhcp_end" label="DHCP End" placeholder="e.g. 192.168.1.254" />

			<Textarea name="notes" label="Notes" />

			<Submit className="w-full">
				{ network.id ? 'Update' : 'Create' } Network
			</Submit>
		</Form>
	)
}

export default React.memo(NetworkForm)
