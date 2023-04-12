// TypesFromSerializers CacheKey d1b148b9cf624f996c637ed1a6581721
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

declare export global {
	declare namespace Schema {
		export interface Asset {
			id: number
			activities: Activity[]
			asset_tag?: string
			assignments: Assignment[]
			available_to_checkout: unknown
			category: Category
			company: Company
			cost: number
			cost_currency: string
			created_at: string | Date
			default_location: Location
			default_location_id?: number
			department: Department
			manufacturer: Manufacturer
			min_qty?: number
			model: Model
			model_id: number
			name: string
			notes?: string
			purchase: Purchase
			purchased_at?: string | Date
			qty?: number
			requestable: boolean
			serial?: string
			status_label: StatusLabel
			type: string
			updated_at: string | Date
			vendor: Vendor
			vendor_id?: number
		}

	}
}
