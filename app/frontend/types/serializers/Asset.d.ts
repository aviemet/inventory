// TypesFromSerializers CacheKey 0ef1eed5321fffcb0ac9d6ab3ecf993f
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Money from '../Money'

declare global {
  namespace Schema {
    interface Asset {
      id?: number
      asset_tag?: string
      available_to_checkout: unknown
      cost: Money
      cost_currency: string
      default_location_id?: number
      min_qty?: number
      model_id: number
      name: string
      notes?: string
      purchased_at?: string | Date
      qty?: number
      requestable: boolean
      serial?: string
      status_label_id?: number
      type: string
      vendor_id?: number
    }
  }
}
