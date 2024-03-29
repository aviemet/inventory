// TypesFromSerializers CacheKey 9aaeae918a865bf75ca8a11c5374867e
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
      vendor: VendorsOptions
      vendor_id?: number
    }
  }
}
