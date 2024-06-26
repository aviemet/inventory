import React from 'react'
import {
	Form,
	TextInput,
	Textarea,
	Submit,
} from '@/Components/Form'
import { IPAddress } from '@/lib'
import { type HTTPVerb, type UseFormProps } from 'use-inertia-form'

type NetworkFormData = {
	network: Schema.NetworksFormData
}

export interface NetworkFormProps {
	to: string
	method?: HTTPVerb
	onSubmit?: (object: UseFormProps<NetworkFormData>) => boolean|void
	network: Schema.NetworksFormData
}

const emptyNetwork: Schema.NetworksFormData = {
	name: '',
	vlan_id: NaN,
	address: '',
	gateway: '',
	dhcp_start: '',
	dhcp_end: '',
	notes: '',
}

const NetworkForm = ({ to, method = 'post', onSubmit, network = emptyNetwork }: NetworkFormProps) => {
	const handleAddressBlur = (value: string, form: UseFormProps<NetworkFormData>) => {
		let ip: IPAddress | undefined = undefined

		form.clearErrors('network.address')

		try {
			ip = new IPAddress(value)

			if(ip.address.subnetMask === 32) {
				form.setError('network.address', `${form.getData('network.address')} is not a valid network address. Must not be a /32 address.`)

				ip = undefined
			}
		} catch(e) {
			form.setError('network.address', `${form.getData('network.address')} is not a valid network address. Value must contain subnet prefix, e.g. "192.168.1.0/24"`)
		}

		if(ip !== undefined && form.getData('network.gateway') === '') {
			form.setData('network.gateway', ip.address.startAddressExclusive().address)
		}
	}

	return (
		<Form<NetworkFormData>
			model="network"
			data={ { network } }
			to={ to }
			method={ method }
			onSubmit={ onSubmit }
		>
			<TextInput name="name" label="Name" required autoFocus />

			<TextInput name="address" label="Network" placeholder="e.g. 192.168.1.0/24" required onBlur={ handleAddressBlur } />

			<TextInput name="gateway" label="Gateway Address" placeholder="e.g. 192.168.1.1" />

			<TextInput name="dhcp_start" label="DHCP Start" placeholder="e.g. 192.168.1.100" />

			<TextInput name="dhcp_end" label="DHCP End" placeholder="e.g. 192.168.1.254" />

			<TextInput name="vlan_id" label="VLAN ID" />

			<Textarea name="notes" label="Notes" />

			<Submit>
				{ network.id ? 'Update' : 'Create' } Network
			</Submit>
		</Form>
	)
}

export default NetworkForm
