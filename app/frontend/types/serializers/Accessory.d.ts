// TypesFromSerializers CacheKey 1276ae29acb55096dfd336cab1151539
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Money from '../Money'

declare global {
  namespace Schema {
    interface Accessory {
      id: number
      asset_tag?: string
      cost: Money
      cost_currency: string
      default_location_id?: number
      min_qty?: number
      model_id: number
      name: string
      notes?: string
      purchased_at?: string | Date
      qty?: number
      qty_available: number
      requestable: boolean
      serial?: string
      status_label_id?: number
      vendor_id?: number
    }
  }
}
