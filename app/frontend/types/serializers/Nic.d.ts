// TypesFromSerializers CacheKey 4021d9fe7aa8c91a98f4f086bfbb0e10
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { IpLease } from './IpLease'

declare global {
	 declare namespace Schema {
		export interface Nic {
			id?: number
			createdAt: string | Date
			ips: IpLease[]
			itemId: number
			mac?: unknown
			nicType: number
			updatedAt: string | Date
		}

	}
}
