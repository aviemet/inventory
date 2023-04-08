// TypesFromSerializers CacheKey 12bddec707d8b4385e97368324539380
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.

declare export global {
	declare namespace Schema {
		export interface LicensesNew {
			id?: number
			category_id: number
			cost: unknown
			cost_currency: string
			expires_at?: string | Date
			key?: string
			licenser_email?: string
			licenser_name?: string
			maintained: boolean
			manufacturer_id: number
			name: string
			notes?: string
			purchased_at?: string | Date
			qty?: number
			qty_available: unknown
			reassignable: boolean
			terminates_at?: string | Date
			vendor_id?: number
		}

	}
}
