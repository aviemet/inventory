// TypesFromSerializers CacheKey f753a61e36df229fdede71653c46f3e3
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { Activity } from './Activity'
import type { Assignment } from './Assignment'
import type { Category } from './Category'
import type { Company } from './Company'
import type { Location } from './Location'
import type { Department } from './Department'
import type { Manufacturer } from './Manufacturer'
import type { Model } from './Model'
import type { Purchase } from './Purchase'
import type { StatusLabel } from './StatusLabel'
import type { Vendor } from './Vendor'

declare global {
	 declare namespace Schema {
		export interface Asset {
			id?: number
			activities: Activity[]
			assetTag?: string
			assignments: Assignment[]
			availableToCheckout: unknown
			category: Category
			company: Company
			cost: unknown
			costCurrency: string
			createdAt: string | Date
			defaultLocation: Location
			defaultLocationId?: number
			department: Department
			manufacturer: Manufacturer
			minQty?: number
			model: Model
			modelId: number
			name: string
			notes?: string
			purchase: Purchase
			purchasedAt?: string | Date
			qty?: number
			requestable: boolean
			serial?: string
			statusLabel: StatusLabel
			type: string
			updatedAt: string | Date
			vendor: Vendor
			vendorId?: number
		}

	}
}
