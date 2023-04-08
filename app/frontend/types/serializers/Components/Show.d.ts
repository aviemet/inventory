// TypesFromSerializers CacheKey 03193ff34716f2743f1602c09200ae05
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { Activity } from '../Activity'
import type { Assignment } from '../Assignment'
import type { Category } from '../Category'
import type { Location } from '../Location'
import type { Department } from '../Department'
import type { Manufacturer } from '../Manufacturer'
import type { Model } from '../Model'
import type { Purchase } from '../Purchase'
import type { Vendor } from '../Vendor'

declare export global {
	declare namespace Schema {
		export interface ComponentsShow {
			id?: number
			activities: Activity[]
			asset_tag?: string
			assignments: Assignment[]
			category: Category
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
			qty_available: number
			serial?: string
			updated_at: string | Date
			vendor: Vendor
			vendor_id?: number
		}

	}
}
