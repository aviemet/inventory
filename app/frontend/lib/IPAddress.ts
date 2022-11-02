import * as ipAddress from 'ip-address'

class IPAddress {
	address: ipAddress.Address4 | ipAddress.Address6

	constructor(address: string) {
		this.address = this.parse(address)
	}

	parse(address: string) {
		try {
			return new ipAddress.Address4(address)
		} catch(e) {}
		try {
			return new ipAddress.Address6(address)
		} catch(e) {}

		throw new Error('Invalid address provided. Must be a valid IPv4 or IPv6 string value.')
	}

	between(start: IPAddress, end: IPAddress) {
		const binary = this.toBinary()
		return binary >= start.toBinary() && binary <= end.toBinary()
	}

	toBinary() {
		if(this.address.v4) {
			return (this.address as ipAddress.Address4).toArray().reduce((str, octet) => {
				return str + (octet >>> 0).toString(2).padStart(8, '0')
			}, '')
		} else {
			// TODO: This hasn't been tested and likely doesn't work
			return (this.address as ipAddress.Address6).toByteArray().reduce((str, octet) => {
				return str + (octet >>> 0).toString(2).padStart(16, '0')
			}, '')
		}
	}

}

export default IPAddress


