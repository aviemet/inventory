import { AbstractIPNum } from 'ip-num/IPNumber'
import { AbstractIPRange } from 'ip-num/IPRange'
import { Asn } from 'ip-num/IPNumber'
import { IPv4 } from 'ip-num/IPNumber'
import { IPv6 } from 'ip-num/IPNumber'
import { IPv4CidrRange } from 'ip-num/IPRange'
import { IPv6CidrRange } from 'ip-num/IPRange'
import { IPv4Prefix } from 'ip-num/Prefix'
import { IPv6Prefix } from 'ip-num/Prefix'
import { IPv4Mask } from 'ip-num/IPNumber'
import { IPv6Mask } from 'ip-num/IPNumber'
import { Pool } from 'ip-num/IPPool'
import { RangedSet } from 'ip-num/IPRange'
import { Validator } from 'ip-num/Validator'
import * as IPv6Utils from 'ip-num/IPv6Utils'
import { Octet } from 'ip-num/Octet'


class IPAddress {
	ip: IPv4 | IPv6 | IPv4CidrRange | IPv6CidrRange

	constructor(address: string) {
		this.ip = this.parse(address)
	}

	parse(address: string) {
		try {
			return new IPv4(address)
		} catch(e) {}
		try {
			return IPv4.fromString(address)
		} catch(e) {}
		try {
			return IPv4CidrRange.fromCidr(address)
		} catch(e) {}
		try {
			return new IPv6(address)
		} catch(e) {}
		try {
			return IPv6CidrRange.fromCidr(address)
		} catch(e) {}

		throw new Error('Invalid address provided. Must be a valid IPv4 or IPv6 string value.')
	}

	type() {
		if(this.ip.hasOwnProperty('type')) return this.ip.type
		return this.ip.cidrPrefix.type
	}

}

export default IPAddress


// const v4 = new IPAddress('10.10.10.5')
// const v4cidr = new IPAddress('10.10.10.0/24')
// const v6 = new IPAddress('2001:db8:7fff:ffff:ffff:ffff:ffff:ffff')
// const v6cidr = new IPAddress('2001:db8:0:0:0:0:0:0/34')


