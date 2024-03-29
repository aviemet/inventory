// TypesFromSerializers CacheKey 516284e986978e341d2003a0c3307cdd
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
export {}

declare global {
  namespace Schema {
    interface Consumable {
      id: number
      cost: number
      cost_currency: string
      created_at: string | Date
      default_location_id?: number
      min_qty?: number
      model_id: number
      name: string
      notes?: string
      qty?: number
      qty_available: number
      requestable: boolean
      updated_at: string | Date
      vendor_id?: number
    }
  }
}
