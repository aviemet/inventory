// TypesFromSerializers CacheKey 4b558b71dbb3ff88a5d0b4f244606a1d
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type LocationsOptions from '../Locations/Options'
import type ModelsOptions from '../Models/Options'
import type StatusLabelsOptions from '../StatusLabels/Options'
import type VendorsOptions from '../Vendors/Options'

declare global {
  namespace Schema {
    interface ComponentsFormData {
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
      requestable: boolean
      serial?: string
      status_label: StatusLabelsOptions
      status_label_id?: number
      vendor: VendorsOptions
      vendor_id?: number
    }
  }
}
