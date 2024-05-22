// TypesFromSerializers CacheKey 93e8dccb0adc45d02b82795f730920c7
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type LocationsOptions from '../Locations/Options'
import type ModelsOptions from '../Models/Options'
import type VendorsOptions from '../Vendors/Options'

declare global {
  namespace Schema {
    interface ComponentsEdit {
      id: number
      asset_tag?: string
      cost: number
      cost_currency: string
      created_at: string | Date
      default_location: LocationsOptions
      default_location_id?: number
      min_qty?: number
      model: ModelsOptions
      model_id: number
      name: string
      notes?: string
      purchased_at?: string | Date
      qty?: number
      qty_available: number
      serial?: string
      updated_at: string | Date
      vendor: VendorsOptions
      vendor_id?: number
    }
  }
}
