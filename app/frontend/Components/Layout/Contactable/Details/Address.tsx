import React from 'react'

interface IAddressProps {
	address: Schema.Address
}

const Address = ({ address }: IAddressProps) => {
	return (
		<address>
			{ address.address }<br />
			{ address.address_2 }<br />
			{ address.city }, { address.region } { address.postal }<br />
		</address>
	)
}

export default Address
