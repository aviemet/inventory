// TypesFromSerializers CacheKey 35eb0b6b526464cb4ffe43ac19b395e3
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type LocationsOptions from '../Locations/Options'
import type ModelsOptions from '../Models/Options'
import type VendorsOptions from '../Vendors/Options'

declare global {
  namespace Schema {
    interface ConsumablesEdit {
      id: number
      cost: number
      cost_currency: string
      default_location?: LocationsOptions
      default_location_id?: number
      min_qty?: number
      model?: ModelsOptions
      model_id: number
      name: string
      notes?: string
      qty?: number
      qty_available: number
      requestable: boolean
      vendor?: VendorsOptions
      vendor_id?: number
    }
  }
}
