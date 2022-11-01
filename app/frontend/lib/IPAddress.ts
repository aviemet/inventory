// import * as ipNum from 'ip-num'

// class IPAddress {
// 	ip: ipNum.IPv4 | ipNum.IPv6 | ipNum.IPv4CidrRange | ipNum.IPv6CidrRange

// 	constructor(address: string) {
// 		this.ip = this.parse(address)
// 	}

// 	parse(address: string) {
// 		try {
// 			return new ipNum.IPv4(address)
// 		} catch(e) {}
// 		try {
// 			return ipNum.IPv4.fromString(address)
// 		} catch(e) {}
// 		try {
// 			return ipNum.IPv4CidrRange.fromCidr(address)
// 		} catch(e) {}
// 		try {
// 			return new ipNum.IPv6(address)
// 		} catch(e) {}
// 		try {
// 			return ipNum.IPv6CidrRange.fromCidr(address)
// 		} catch(e) {}

// 		throw new Error('Invalid address provided. Must be a valid IPv4 or IPv6 string value.')
// 	}

// 	// type() {
// 	// 	if(this.ip.hasOwnProperty('type')) return this.ip.type
// 	// 	return this.ip.cidrPrefix.type
// 	// }

// }

// export default IPAddress


