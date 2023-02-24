import React from 'react'
import {
	Form,
	TextInput,
	Textarea,
	Submit,
} from '@/Components/Form'
import { type UseFormProps } from 'use-inertia-form'

export interface INetworkFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps) => boolean|void
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
		>
			<TextInput name="name" label="Name" required autoFocus />

			<TextInput name="vlan_id" label="VLAN ID" />

			<TextInput name="address" label="Network Addres" placeholder="e.g. 192.168.1.0/24" required />

			<TextInput name="gateway" label="Gateway Addres" placeholder="e.g. 192.168.1.1" />

			<TextInput name="dhcp_start" label="DHCP Start" placeholder="e.g. 192.168.1.100" />

			<TextInput name="dhcp_end" label="DHCP End" placeholder="e.g. 192.168.1.254" />

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ network.id ? 'Update' : 'Create' } Network
			</Submit>
		</Form>
	)
}

export default React.memo(NetworkForm)
