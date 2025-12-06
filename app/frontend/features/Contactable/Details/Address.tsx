interface AddressProps {
	address: Schema.Address
}

const Address = ({ address }: AddressProps) => {
	return (
		<address>
			{ address.address }<br />
			{ address.address_2 }<br />
			{ address.city }, { address.region } { address.postal }<br />
		</address>
	)
}

export default Address
